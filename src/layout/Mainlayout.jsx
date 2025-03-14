import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
      
        <main className="flex-grow">
          <Outlet />
        </main>
      
        <footer>
          <Footer />
        </footer>
      </div>
    );
};

export default Mainlayout;