import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateNew from "./pages/CreateNew";
import Edit from "./pages/Edit";
import SingleBlog from "./pages/SingleBlog";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import MainLayouts from "./Layouts/MainLayouts";
import SignupCard from "./pages/Signup";
import Login from "./pages/Login";

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
          path: "signup",
          element: <SignupCard />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "new",
          element: <CreateNew />,
        },
        {
          path: "edit/:id",
          element: <Edit />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
