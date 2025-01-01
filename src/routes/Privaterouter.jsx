import { useContext } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

// eslint-disable-next-line react/prop-types
const Privaterouter = ({ children }) => {
    const {user ,loading} = useContext(Authcontext);
    const location = useLocation();
    if(loading){
      return <Loading></Loading>
  }
    if (user && user?.email) {
        return children;
      }
      return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default Privaterouter;