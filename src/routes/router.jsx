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
            element: <Mybookedtutor></Mybookedtutor>
         },
        {
            path: "tutordetails",
            element: <TutorDetails></TutorDetails>
        },
        {
            path: "addtutorials",
            element: <Privaterouter>
              <Addtutorials></Addtutorials>
            </Privaterouter>       
         },
         {
            path: "mytutirials",
            element: <Mytutorials></Mytutorials>
         },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "login",
            element: <Login></Login>
        }
    ]
  },
  {
    path: "category",
    element: <Findturtors></Findturtors>
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

export default router;