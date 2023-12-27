import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseApi";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  tagTypes: "Comments",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    postComment: build.mutation({
      query: ({ text, productId }) => {
        return {
          url: `ads/${productId}/comments`,
          method: "POST",
          body: { text },
        };
      },
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),

    getComments: build.query({
      query: (productId) => {
        return {
          url: `ads/${productId}/comments`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comments", id })),
              { type: "Comments", id: "LIST" },
            ]
          : [{ type: "Comments", id: "LIST" }],
    }),
  }),
});

export const { useGetCommentsQuery, usePostCommentMutation } = commentsApi;
