import { useGetusers, usePostUser } from "../api";
import Container from "../components/Container";
import UserCard from "../components/UserCard";

const UsersView = () => {

  const {users} = useGetusers()

  const { createUser } = usePostUser()

  return (
    <Container>
      <p className="w-full text-center text-2xl font-semibold py-10">List of users</p>
      <ul role="list" className="divide-y divide-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center w-full">
        {users?.map((item, index) => (
          <UserCard key={index} user={item} />
        ))}
      </ul>
      <div className="w-full flex items-center justify-center py-5">
        <button className="py-2 px-4 bg-blue-500 text-white rounded-md" onClick={() => createUser()} >Create user</button>
      </div>
    </Container>
  )
}

export default UsersView;
