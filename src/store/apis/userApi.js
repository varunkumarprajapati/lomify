import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASEURL + "/api/users",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      updateUser: builder.mutation({
        invalidatesTags: ["USER"],
        query: (data) => {
          return {
            url: "/",
            method: "PUT",
            body: data,
          };
        },
      }),

      fetchUser: builder.query({
        providesTags: ["USER"],
        keepUnusedDataFor: 0,
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

export const { useUpdateUserMutation, useFetchUserQuery } = userApi;
export { userApi };
