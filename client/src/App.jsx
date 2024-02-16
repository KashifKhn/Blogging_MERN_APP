import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateNew from "./pages/CreateNew";
import Edit from "./pages/Edit";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new",
      element: <CreateNew />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
