import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASEURL}/api/auth`,
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
        query: (token) => `/verify-email/${token}`,
      }),

      forgotPassword: builder.query({
        query: (email) => `/forgot-password?email=${email}`,
      }),

      resetPassword: builder.mutation({
        query: ({ token, password }) => ({
          url: `/reset-password/${token}`,
          method: "POST",
          body: { password },
        }),
      }),
      googleLogin: builder.mutation({
        query: (googleToken) => ({
          url: "/google",
          method: "POST",
          body: { token: googleToken },
          credentials: "include", //same as axios withCredentials:true
        }),
      }),
    };
  },
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useVerifyEmailQuery,
  useLazyForgotPasswordQuery,
  useResetPasswordMutation,
  useGoogleLoginMutation,
} = authApi;
export { authApi };
