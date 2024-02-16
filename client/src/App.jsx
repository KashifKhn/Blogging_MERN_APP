import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateNew from "./pages/CreateNew";
import Edit from "./pages/Edit";
import SingleBlog from "./pages/SingleBlog";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <SingleBlog />,
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
