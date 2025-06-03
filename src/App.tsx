import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <h2>Home Page</h2>
        },
        {
          path: "/users",
          element: <h2>Another Page</h2>        }
      ]
    }]
  )

  return (
  <RouterProvider router={router} />
  )
};

export default App;

