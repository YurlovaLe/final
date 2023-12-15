import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => 'ads'
    })
  })
});

export const {useGetProductsQuery} = productsApi;