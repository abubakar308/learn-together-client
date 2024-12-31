import { useContext } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Privaterouter = ({ children }) => {
    const {user} = useContext(Authcontext);
    const location = useLocation();
    
    if (user && user?.email) {
        return children;
      }
      return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default Privaterouter;