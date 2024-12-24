import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
    return (
        <div>
        <header className="">
            <Navbar></Navbar>
        </header>

        <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
        </main>

        <footer>
        <Footer></Footer>
        </footer>
        </div>
    );
};

export default Mainlayout;