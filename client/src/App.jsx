import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateNew from "./pages/CreateNew";
import Edit from "./pages/Edit";
import SingleBlog from "./pages/SingleBlog";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayouts from "./Layouts/MainLayouts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":id",
          element: <SingleBlog />,
        },
        {
          path: "new",
          element: <CreateNew />,
        },
        {
          path: "edit/:id",
          element: <Edit />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
