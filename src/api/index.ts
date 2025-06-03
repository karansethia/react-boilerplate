/**
 * API REQUEST METHOD DOCUMENTATION
 * 
 * This project uses a standardized pattern for writing API requests using React Query
 * and a custom Axios instance. Follow this methodology for all new API integrations.
 * 
 * STRUCTURE:
 * 1. Custom hook with naming convention: useGet<ResourceName>
 * 2. Internal async request function with proper TypeScript typing
 * 3. useQuery hook with descriptive queryKey and queryFn
 * 4. Return object with renamed data and loading state
 * 
 * COMPONENTS:
 * - `api`: Custom Axios instance (configured with base URL, interceptors, etc.)
 * - `useQuery`: React Query hook for data fetching and caching
 * - `queryKey`: Array for cache identification and invalidation
 * - `queryFn`: Async function that performs the actual API call
 * 
 * EXAMPLE IMPLEMENTATION:
 * 
 * export const useGetUsers = () => {
 *   const request = async (): Promise<User[]> => {
 *     const response = await api.get("<api-endpoint>")
 *     return response.data
 *   }
 *   const { data: users, isLoading } = useQuery({
 *     queryKey: ["users"],
 *     queryFn: request
 *   })
 *   return { users, isLoading }
 * }
 * 
 */
