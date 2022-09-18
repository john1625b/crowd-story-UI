import {createBrowserRouter, RouterProvider} from "react-router-dom";
import StoryBuilder from "../StoryBuilder/StoryBuilder";
import Authenticate from "../Auth/Authenticate";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authenticate />,
      
    },
    {
      path: "/story/",
      element: <StoryBuilder/>,
    },
    {
      path: "/story/:storyId",
      element: <StoryBuilder />
    }
  ]);


    return <RouterProvider router={router}/>
};

export default Router;