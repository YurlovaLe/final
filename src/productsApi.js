import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalstorage } from "./helpers/authToken";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ['Products','Product'],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8090/" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "ads",
    }),

    getPersonalProducts: build.query({
      query: () => {
        return {
          url: "ads/me",
          method: "GET",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
        };
      },
      providesTags: result => result
        ? [
            ...result.map(({ id }) => ({ type: 'Products', id })),
            { type: 'Products', id: 'LIST' },
          ]
        : [{ type: 'Products', id: 'LIST' }],
    }),

    postProduct: build.mutation({
      query: ({body, title, description, price}) => {
        return {
          url: `ads?title=${title}&description=${description}&price=${price}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
          body,
          formData: true,
        };
      },
      invalidatesTags: [{type: 'Products', id: 'LIST'}, 'Product']
    }),

    postProductWithoutImage: build.mutation({
      query: (body) => {
        return {
          url: "adstext",
          method: "POST",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
          body,
        };
      },
      invalidatesTags: [{type: 'Products', id: 'LIST'}, 'Product']
    }),

    getProduct: build.query({
      query: (productId) => {
        return {
          url: `ads/${productId}`,
          method: "GET",
        };
      },
      providesTags: ['Product']
    }),

    updateProduct: build.mutation({
      query: (data) => {
        return {
          url: `ads/${data.productId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
          body: data,
        }
      },
      invalidatesTags: ['Product']
    }),

    deleteProduct: build.mutation({
      query: (productId) => {
        return {
          url: `ads/${productId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getTokenFromLocalstorage()}`,
          },
        }
      },
      invalidatesTags: [{type: 'Products', id: 'LIST'}]
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
} = productsApi;
