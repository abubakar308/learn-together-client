import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const {user, logout} = useContext(Authcontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
    return (
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-60 backdrop-blur-md shadow-md z-50 dark:bg-gray-900 dark:bg-opacity-80">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          <img className="h-12 w-12" src={logo} alt="Learn Together" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-lg font-medium">
          <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
          <li><NavLink to="/findtutors" className="hover:text-blue-500">Find Tutors</NavLink></li>
          <li><NavLink to="/addtutorials" className="hover:text-blue-500">Add Tutorials</NavLink></li>
          <li><NavLink to="/mytutorials" className="hover:text-blue-500">My Tutorials</NavLink></li>
          <li><NavLink to="/mybookedtutors" className="hover:text-blue-500">My Booked Tutors</NavLink></li>
        </ul>

        {/* User Section */}
        <div className="flex items-center gap-3">
          {user?.email ? (
            <div className="relative group">
              <img
                tabIndex={0}
                role="button"
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user?.photoURL}
                alt={user?.displayName}
              />
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 shadow-md rounded-lg p-2">
                <p className="text-center text-sm font-medium dark:text-white">{user?.displayName}</p>
              </div>
            </div>
          ) : null}

          {user ? (
            <button onClick={() => logout(navigate("/login"))} className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg font-semibold">
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg font-semibold">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 backdrop-blur-md flex flex-col justify-center items-center text-xl font-semibold space-y-6 text-white z-40">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6">
            <RxCross1 size={32} />
          </button>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/findtutors" onClick={() => setIsMenuOpen(false)}>Find Tutors</NavLink>
          <NavLink to="/addtutorials" onClick={() => setIsMenuOpen(false)}>Add Tutorials</NavLink>
          <NavLink to="/mytutorials" onClick={() => setIsMenuOpen(false)}>My Tutorials</NavLink>
          <NavLink to="/mybookedtutors" onClick={() => setIsMenuOpen(false)}>My Booked Tutors</NavLink>
        </div>
      )}
    </nav>
    );
};

export default Navbar;