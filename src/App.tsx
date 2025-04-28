import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UsersView from "./pages/UsersView";
import HomeView from "./pages/HomeView";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <HomeView />
        },
        {
          path: "/users",
          element: <UsersView />        }
      ]
    }]
  )

  return (
  <RouterProvider router={router} />
  )
};

export default App;

