import UserListItem from "./UserListItem";
export default function UserList({ users = [], onClick }) {
  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user._id} {...user} onClick={() => onClick(user)} />
      ))}
    </ul>
  );
}
