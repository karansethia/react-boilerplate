import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios"
import { type User } from "../types";
import { toast } from "sonner";

export const useGetusers = () => {
  const request = async (): Promise<User[]> => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
  }

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: request
  })

  return { users, isLoading }
}

export const usePostUser = () => {
  const request = async () => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
      name: "Peter Parker",
      email: "pete24@midtown.com",
      username: "defnotspidey",
      phone: "1234567890",
      website: "spideytacos.com"
    })

    return response.data
  }

  const { mutate: createUser, status } = useMutation({
    mutationFn: request,
    onSuccess: () => {
      toast.message("User created")
    }
  })

  return { createUser, status }

}
