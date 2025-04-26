import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <h1>Home</h1>
        },
        {
          path: "/users",
          element: <h1>User</h1>
        }
      ]
    }]
  )

  return (
  <RouterProvider router={router} />
  )
};

export default App;

