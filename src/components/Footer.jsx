import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="py-8 bg-background text-primary">
            {/* Footer Content */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo and Tagline */}
                <div>
                    <h2 className="text-xl font-bold">Learn Together</h2>
                    <p className="mt-2">
                        Empowering learning, one connection at a time.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaFacebook size={20} /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaInstagram size={20} /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-600"><FaLinkedin size={20} /></a>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Me</h3>
                    <p>Email: mdabubakarsiddique789@gmail.com</p>
                    <p>Location: Bangladesh</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500">
                <p>&copy; 2024 Learn Together | Designed by Md Abu Bakar Siddique</p>
            </div>
        </footer>
    );
};

export default Footer;