import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export const useGetusers = () => {
  const request = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
  }

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: request
  })

  return {users, isLoading}
}
