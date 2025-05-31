import Dexie from "dexie";

const db = new Dexie("chat-app");

db.version(1).stores({
  messages: "_id, senderId, receiverId",
});

export const saveMessages = async (messages) => {
  await db.messages.bulkPut(messages);
};

export const getConversation = async (id) => {
  const data = await Promise.all([
    db.messages.where("senderId").equals(id).toArray(),
    db.messages.where("receiverId").equals(id).toArray(),
  ]);

  return [...data[0], ...data[1]].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
};
