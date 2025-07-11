import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(user?.photoURL)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  const navItems = (
    <>
     <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "border-b-2 border-secondary text-secondary"
      : "hover:text-secondary transition"
  }
>
  Home
</NavLink>
      <NavLink to="/findtutors"   className={({ isActive }) =>
    isActive
      ? "border-b-2 border-secondary text-secondary"
      : "hover:text-secondary transition"
  }>Find Tutors</NavLink>
      <NavLink to="/addtutorials"   className={({ isActive }) =>
    isActive
      ? "border-b-2 border-secondary text-secondary"
      : "hover:text-secondary transition"
  }>Add Tutorials</NavLink>
      <NavLink to="/mytutorials"   className={({ isActive }) =>
    isActive
      ? "border-b-2 border-secondary text-secondary"
      : "hover:text-secondary transition"
  }>My Tutorials</NavLink>
      <NavLink to="/mybookedtutors"   className={({ isActive }) =>
    isActive
      ? "border-b-2 border-secondary text-secondary"
      : "hover:text-secondary transition"
  }>My Booked Tutors</NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Learn Together" className="h-12 w-12 object-contain" />
          <span className="text-xl font-boldb text-white">Learn Together</span>
        </Link>

        {/* Desktop Nav */}
       <ul className="hidden lg:flex gap-6 items-center text-white text-base font-medium">

          {navItems}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode */}
          <button
            onClick={handleThemeToggle}
            className="text-xl focus:outline-none"
            title="Toggle Theme"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          {/* User Section */}
          {user?.email ? (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary"
              />
              <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg px-3 py-1 shadow hidden group-hover:block z-50">
                <p className="text-sm font-medium dark:text-white">{user.displayName}</p>
              </div>
            </div>
          ) : null}

          {user ? (
           <button
  onClick={() => logout(navigate("/login"))}
  className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition text-sm font-semibold"
>
  <FaSignOutAlt /> Logout
</button>

          ) : (
           <Link
  to="/login"
  className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition text-sm font-semibold"
>
  <FaSignInAlt /> Login
</Link>

          )}

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? (
              <RxCross1 size={26} className="text-gray-800 dark:text-white" />
            ) : (
              <RxHamburgerMenu size={26} className="text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div onClick={() => setIsMenuOpen(false)} className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center space-y-6 text-white text-xl font-semibold z-40">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-6"
          >
            <RxCross1 size={32} />
          </button>
          {navItems}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
