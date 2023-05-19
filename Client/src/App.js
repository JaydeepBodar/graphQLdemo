import logo from "./logo.svg";
import User from "./User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./AddUser";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    { path: "adduser", element: <AddUser /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
