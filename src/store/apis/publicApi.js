import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const publicApi = createApi({
  reducerPath: "public",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL + "/api/public",
  }),

  endpoints: (builder) => {
    return {
      fetchUsers: builder.mutation({
        query: (data) => {
          return {
            url: "/users",
            method: "POST",
            body: data,
          };
        },
        keepUnusedDataFor: 0,
      }),
    };
  },
});

export const { useFetchUsersMutation } = publicApi;
export { publicApi };
