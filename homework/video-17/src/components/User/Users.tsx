import './Users.css'
import UserCard from "./UserCard.tsx";

function Users() {

  const users = [
    {
      id: 1,
      name: "John",
      age: 32,
      email: "john@gmail.com",
      avatar: "https://tinyurl.com/4ez2s7mt",
    },
    {
      id: 2,
      name: "Alice",
      age: 17,
      email: "alice@yahoo.com",
      avatar: "https://tinyurl.com/ynyx9nhu",
    },
    { id: 3, name: "Mike", age: 44, email: "mike@hotmail.com" },
    {
      id: 4,
      name: "Sarah",
      age: 29,
      email: "sarah@gmail.com",
      avatar: "https://tinyurl.com/yyktspmh",
    },
  ]

  return (
    <ul className="users-container">
      {users.map(user =>
          <UserCard user={user} key={user.id}/>)}
    </ul>
  )
}

export default Users
