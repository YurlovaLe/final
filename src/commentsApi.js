import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalstorage } from "./helpers/authToken";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  tagTypes: 'Comments',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8090/" }),
  endpoints: (build) => ({
    
    postComment: build.mutation({
      query: ({text, productId}) => {
        return {
          url: `ads/${productId}/comments`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
          body: {text},
        };
      },
      invalidatesTags: [{type: 'Comments', id: 'LIST'}]
    }),

    getComments: build.query({
      query: (productId) => {
        return {
          url: `ads/${productId}/comments`,
          method: "GET",
        };
      },
      providesTags: result => result
        ? [
            ...result.map(({ id }) => ({ type: 'Comments', id })),
            { type: 'Comments', id: 'LIST' },
          ]
        : [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  usePostCommentMutation,
} = commentsApi;
