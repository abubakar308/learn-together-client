import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Findturtors from "../pages/Findturtors";
import TutorDetails from "../pages/TutorDetails";
import Addtutorials from "../pages/Addtutorials";
import Mybookedtutor from "../pages/Mybookedtutor";
import Mytutorials from "../pages/Mytutorials";
import Error from "../components/Error";
import Privaterouter from "./Privaterouter";
import Updatetutorial from "../pages/Updatetutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "findtutors",
            element: <Findturtors></Findturtors>,
            loader: async () => { 
              const response = await fetch(
                `${import.meta.env.VITE_API_URL}/tutors`
              );
              const tutors = await response.json(); 
              return { tutors }; 
            }
        },
        {
            path: "mybookedtutors",
            element: <Privaterouter>
              <Mybookedtutor></Mybookedtutor>
            </Privaterouter>
         },
        {
            path: "addtutorials",
            element: <Privaterouter>
              <Addtutorials></Addtutorials>
            </Privaterouter>       
         },
         {
            path: "mytutorials",
            element: <Privaterouter>
              <Mytutorials></Mytutorials>
            </Privaterouter>
         },
        {
          path: "/tutor/:category",
          element: <Findturtors />,
          loader: async ({ params }) => {
            const { category } = params; 
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/tutor/${category}`
            );
            const tutors = await response.json(); 
            return { tutors, category }; 
          }
        },
        {
          path:'tutorial/:id',
          element: <Privaterouter>
            <Updatetutorial></Updatetutorial>
          </Privaterouter>
        },
        {
          path: '/findtutors/:id',
          element: <Privaterouter>
            <TutorDetails></TutorDetails>
          </Privaterouter>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        
    ]
  },

  {
    path: "*",
    element: <Error></Error>
  }
]);

export default router;