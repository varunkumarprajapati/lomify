import { createSlice, isAnyOf } from "@reduxjs/toolkit";

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
      state.selectedUser = action.payload.user;
      state.messages = action.payload.messages;
      state.isTyping = false;
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
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(addMessage), (state, action) => {
      const id = action.payload.isSender
        ? action.payload.receiverId
        : action.payload.senderId;

      const index = state.chatList.findIndex(({ _id }) => _id === id);
      const user = state.chatList[index];

      state.chatList.splice(index, 1);

      user.lastMessage = action.payload.content;
      user.timestamp = action.payload.createdAt;

      state.chatList.unshift(user);
    });
  },
});

export const {
  setSelectedUser,
  addMessage,
  clearChatState,
  setTyping,
  updateMessageId,
  setChatList,
} = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
