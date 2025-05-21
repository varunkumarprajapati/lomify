import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedUser: null, messages: [] };

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
    clearChatState() {
      return initialState;
    },
  },
});

export const { setSelectedUser, setMessages, addMessage, clearChatState } =
  chatSlice.actions;

export const chatReducer = chatSlice.reducer;
