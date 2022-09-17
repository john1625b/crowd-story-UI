import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Loading from "../Loading/Loading";
import StoryBuilder from "../StoryBuilder/StoryBuilder";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loading />,
      
    },
    {
      path: "/story/:storyId",
      element: <StoryBuilder />
    }
  ]);


  return <RouterProvider router={router} />
};

export default Router;