import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASEURL}/api/messages`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      fetchChatList: builder.query({
        query: () => "/chat-list",
      }),
    };
  },
});

export const { useFetchChatListQuery } = chatApi;
export { chatApi };
