import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser, clearUser } from "../slices/authSlice";
import { Mutex } from "async-mutex";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8090/",
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = getState().auth;
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers;
  },
});

const mutex = new Mutex();

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const { accessToken, refreshToken, email } = api.getState().auth;
        const refreshResult = await baseQuery({
            url: '/auth/login',
            method: 'PUT',
            body: {
              access_token: accessToken,
              refresh_token: refreshToken
            }
          },
          api,
          extraOptions
        );

        if (!refreshResult.error) {
          api.dispatch(setUser({
            email: email,
            accessToken: refreshResult.data.access_token,
            refreshToken: refreshResult.data.refresh_token
          }))

          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(clearUser());
        } 
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result;
};