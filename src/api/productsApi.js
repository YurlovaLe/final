import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./baseApi";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products", "Product"],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "ads",
      providesTags: ["Product"],
    }),

    getPersonalProducts: build.query({
      query: () => {
        return {
          url: "ads/me",
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products", id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),

    postProduct: build.mutation({
      query: ({ body, title, description, price }) => {
        return {
          url: `ads?title=${title}&description=${description}&price=${price}`,
          method: "POST",
          body,
          formData: true,
        };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }, "Product"],
    }),

    postProductWithoutImage: build.mutation({
      query: (body) => {
        return {
          url: "adstext",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }, "Product"],
    }),

    getProduct: build.query({
      query: (productId) => {
        return {
          url: `ads/${productId}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),

    updateProduct: build.mutation({
      query: (data) => {
        return {
          url: `ads/${data.productId}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Product"],
    }),

    updateProductImage: build.mutation({
      query: ({ productId, images }) => {
        return {
          url: `ads/${productId}/image`,
          method: "POST",
          body: images,
          formData: true,
        };
      },
      invalidatesTags: ["Product"],
    }),

    deleteProduct: build.mutation({
      query: (productId) => {
        return {
          url: `ads/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetPersonalProductsQuery,
  usePostProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  usePostProductWithoutImageMutation,
  useUpdateProductImageMutation,
} = productsApi;
