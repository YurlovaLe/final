import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseApi";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query({
      query: () => {
        return {
          url: "user",
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    updateUser: build.mutation({
      query: (body) => {
        return {
          url: "user",
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),

    updateUserPhoto: build.mutation({
      query: (body) => {
        return {
          url: "user/avatar",
          method: "POST",
          body,
          formData: true,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateUserPhotoMutation,
} = userApi;
