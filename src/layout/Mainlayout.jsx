import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
    return (
        <div>
        <header>
            <Navbar></Navbar>
        </header>

        <main>
        <Outlet></Outlet>
        </main>

        <footer>
        <Footer></Footer>
        </footer>
        </div>
    );
};

export default Mainlayout;