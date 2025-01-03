import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL + "/api/users",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      signup: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),

      login: builder.mutation({
        query: (data) => {
          return {
            url: "/login",
            method: "POST",
            body: data,
          };
        },
      }),

      fetchUser: builder.query({
        query: () => {
          return {
            url: "/",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useSignupMutation,
  useLoginMutation,
  useFetchUserQuery,
} = userApi;
export { userApi };
