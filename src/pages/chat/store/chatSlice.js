import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedUser: null, messages: [], isTyping: false };

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
    clearChatState() {
      return initialState;
    },
  },
});

export const {
  setSelectedUser,
  setMessages,
  addMessage,
  clearChatState,
  setTyping,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
