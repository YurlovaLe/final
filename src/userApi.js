import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getTokenFromLocalstorage} from "./helpers/authToken";

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => {
        return {
          url: 'user',
          method: "GET",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
        }
      },
      providesTags: ['User']
    }),

    updateUser: build.mutation({
      query: (body) => {
        return {
          url: 'user',
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
          body,
        }
      },
      invalidatesTags: ['User']
    }),

    updateUserPhoto: build.mutation({
      query: (body) => {
        return {
          url: 'user',
          method: "POST",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
          body,
        }
      },
      invalidatesTags: ['User']
    })
  })
});

export const {useGetUserQuery, useUpdateUserMutation, useUpdateUserPhotoMutation} = userApi;