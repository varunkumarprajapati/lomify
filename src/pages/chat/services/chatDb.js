import Dexie from "dexie";

const db = new Dexie("chat-app");

db.version(1).stores({
  messages: "_id, senderId, receiverId",
});

export const saveMessages = async (messages) => {
  try {
    await db.messages.bulkPut(messages);
  } catch (error) {
    console.error("Failed to set messages in bulk: ", error);
  }
};

export const getConversation = async (id) => {
  try {
    return await db.messages
      .where("senderId")
      .equals(id)
      .or("receiverId")
      .equals(id)
      .sortBy("createdAt");
  } catch (error) {
    console.error("Failed to fetch conversation:", error);
    return [];
  }
};
