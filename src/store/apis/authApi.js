import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASEURL}/api/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      registerUser: builder.mutation({
        query: (data) => {
          return {
            url: "/register",
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

      verifyEmail: builder.query({
        query: (token) => ({
          method: "GET",
          url: `/verify-email/${token}`,
        }),
      }),
    };
  },
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useVerifyEmailQuery,
} = authApi;
export { authApi };
