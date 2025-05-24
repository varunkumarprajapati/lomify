import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { userApi } from "./apis/userApi";
import { authApi } from "./apis/authApi";
import { publicApi } from "./apis/publicApi";
import { chatApi } from "@/pages/chat/store/chatApi";
import { chatReducer } from "@/pages/chat/store/chatSlice";
import messageMiddleware from "@/pages/chat/store/messageMiddleware";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [publicApi.reducerPath]: publicApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(publicApi.middleware)
      .concat(chatApi.middleware)
      .concat(messageMiddleware);
  },
});

setupListeners(store.dispatch);

export { useUpdateUserMutation, useFetchUserQuery } from "./apis/userApi";
export {
  useLoginMutation,
  useRegisterUserMutation,
  useVerifyEmailQuery,
  useLazyForgotPasswordQuery,
  useResetPasswordMutation,
} from "./apis/authApi";
export { useFetchUsersMutation } from "./apis/publicApi";
export { useFetchChatListQuery } from "@/pages/chat/store/chatApi";

export {
  setSelectedUser,
  setMessages,
  addMessage,
  clearChatState,
  setTyping,
  updateMessageId,
  setChatList,
} from "@/pages/chat/store/chatSlice";

export { store };
