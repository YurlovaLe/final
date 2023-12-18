import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: "auth/login",
          method: "post",
          body,
        }
      }
    }),
    registerUser: builder.mutation({
      query: (body) => {
        return {
          url: "auth/register",
          method: "post",
          body,
        }
      }
    })
  })
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
