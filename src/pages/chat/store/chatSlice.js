import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUser: null,
  messages: [],
  isTyping: false,
  chatList: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    setTyping(state, action) {
      state.isTyping = action.payload;
    },
    clearChatState(state) {
      state.messages = [];
      state.selectedUser = null;
      state.isTyping = false;
    },
    updateMessageId(state, { payload }) {
      const index = state.messages.findIndex(
        (msg) => payload.tempId === msg._id
      );
      const msg = state.messages[index];
      state.messages[index] = { ...msg, _id: payload._id };
    },
    setChatList(state, action) {
      state.chatList = action.payload;
    },
  },
});

export const {
  setSelectedUser,
  setMessages,
  addMessage,
  clearChatState,
  setTyping,
  updateMessageId,
  setChatList,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
