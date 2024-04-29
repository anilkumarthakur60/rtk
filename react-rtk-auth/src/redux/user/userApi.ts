import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseUrl } from "../common/commonApi";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiBaseUrl}/auth`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),

    profileDetail: builder.query({
      query: () => ({
        url: "detail",
        method: "GET",
      }),
    }),
  }),
});

// Export actions for components
export const { useLoginMutation, useLogoutMutation, useProfileDetailQuery } =
  userApi;
