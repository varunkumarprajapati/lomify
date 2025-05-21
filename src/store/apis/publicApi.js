import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const publicApi = createApi({
  reducerPath: "public",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASEURL + "/api/public",
  }),

  endpoints: (builder) => {
    return {
      fetchUsers: builder.mutation({
        query: (query) => `/search-users?query=${query}`,
      }),
    };
  },
});

export const { useFetchUsersMutation } = publicApi;
export { publicApi };
