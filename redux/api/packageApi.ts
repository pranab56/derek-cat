import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface PlanPrice {
  type: string;
  price: number;
  priceId?: string;
  productId?: string;
  _id: string;
}

export interface Package {
  _id: string;
  title: string;
  planPrices: PlanPrice[];
  benefits: string[];
  participantCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: Package[];
}

export const packageApi = createApi({
  reducerPath: "packageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.catherdingapp.com/api/v1" }),
  endpoints: (builder) => ({
    getPackages: builder.query<ApiResponse, void>({
      query: () => "/package/packages",
    }),
  }),
});

export const { useGetPackagesQuery } = packageApi;
