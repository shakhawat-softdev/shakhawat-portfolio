import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Project1 from "../pages/Projects/Project1";
import Project2 from "../pages/Projects/Project2";
import Project3 from "../pages/Projects/Project3";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: 'project1',
            element: <Project1 />
         },
         {
            path: 'project2',
            element: <Project2 />
         },
         {
            path: 'project3',
            element: <Project3 />
         }
      ]
   }
]);

export default router;