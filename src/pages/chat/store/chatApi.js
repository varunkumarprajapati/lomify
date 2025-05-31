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
      fetchConversations: builder.query({
        query: (lastSync) => `/?lastSync=${lastSync}`,
      }),
    };
  },
});

export const { useFetchChatListQuery, useFetchConversationsQuery } = chatApi;
export { chatApi };
