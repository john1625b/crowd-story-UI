import {createBrowserRouter, RouterProvider} from "react-router-dom";
import StoryBuilder from "../StoryBuilder/StoryBuilder";
import Authenticate from "../Auth/Authenticate";

const Router = () => {
<<<<<<< HEAD
    const router = createBrowserRouter([
        {
            path: "/story/",
            element: <StoryBuilder/>,
        },
        {
            path: "/story/:storyId",
            element: <StoryBuilder/>
        }
    ]);
=======
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authenticate />,
      
    },
    {
      path: "/story/:storyId",
      element: <StoryBuilder />
    }
  ]);
>>>>>>> f9e2db9 (something weird going on idk styl)


    return <RouterProvider router={router}/>
};

export default Router;