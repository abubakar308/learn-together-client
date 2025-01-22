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
            element: <Findturtors></Findturtors>
        },
        {
            path: "mybookedtutors",
            element: <Privaterouter>
              <Mybookedtutor></Mybookedtutor>
            </Privaterouter>
         },
        // {
        //     path: "tutordetails",
        //     element: <Privaterouter>
        //       <TutorDetails></TutorDetails>
        //     </Privaterouter>
        // },
        {
            path: "addtutorials",
            element: <Privaterouter>
              <Addtutorials></Addtutorials>
            </Privaterouter>       
         },
         {
            path: "mytutirials",
            element: <Privaterouter>
              <Mytutorials></Mytutorials>
            </Privaterouter>
         },
        {
          path: "/tutor/:category",
          element: <Findturtors />
        },
        {
          path:'tutorial/:id',
          element: <Updatetutorial></Updatetutorial>
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