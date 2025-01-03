import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { Authcontext } from "../authprovider/Authprovider";

const Navbar = () => {
  const {user, logout} = useContext(Authcontext);
  const navigate = useNavigate();
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="findtutors">Find tutors</NavLink></li>
            <li><NavLink to="addtutorials">Add Tutorials</NavLink></li>
            <li><NavLink to="mytutirials">My Tutorials</NavLink></li>
            <li><NavLink to="mybookedtutors">My booked tutors</NavLink></li>
            </ul>
          </div>
          <NavLink to='/' className="text-xl">
            <img className="h-16 w-16" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="findtutors">Find tutors</NavLink></li>
            <li><NavLink to="addtutorials">Add Tutorials</NavLink></li>
            <li><NavLink to="mytutirials">My Tutorials</NavLink></li>
            <li><NavLink to="mybookedtutors">My booked tutors</NavLink></li>
          </ul>
        </div>
        <div className="flex items-center navbar-end gap-3">
            {
                user?.email && 
                 <div>   <img title={user.displayName} className="rounded-full w-12 h-12" src={user?.photoURL} alt={user?.displayName} />
                 </div>
            }
           {
            user ?
                <button onClick={()=>logout(navigate('/login'))} className="bg-gray-300 p-2 font-semibold"> Logout</button>
                  :
            <Link to='/login' className="bg-gray-300 p-2 font-semibold"> Login</Link>
           }
           </div>
      </div>
    );
};

export default Navbar;