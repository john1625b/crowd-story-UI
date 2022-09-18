import {createBrowserRouter, RouterProvider} from "react-router-dom";
import StoryBuilder from "../StoryBuilder/StoryBuilder";

const Router = () => {
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


    return <RouterProvider router={router}/>
};

export default Router;