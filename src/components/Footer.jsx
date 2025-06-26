import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold">Learn Together</h2>
          <p className="mt-3 text-sm text-white leading-relaxed">
            Connecting learners with top tutors. Learn from anywhere, anytime.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-accent transition">Home</a></li>
            <li><a href="/findtutors" className="hover:text-accent transition">Find Tutors</a></li>
            <li><a href="/addtutorials" className="hover:text-accent transition">Add Tutorials</a></li>
            <li><a href="/mybookedtutors" className="hover:text-accent transition">My Booked Tutors</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <p className="text-sm">📧 mdabubakar.dev@gmail.com</p>
          <p className="text-sm mb-3">Dhaka, Bangladesh</p>
          <div className="flex items-center space-x-4 text-xl">
            <a href="https://facebook.com/mdabubakar308" target="_blank" className="hover:text-accent transition" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com/in/abubakar308" target="_blank" className="hover:text-accent transition" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/abubakar308" target="_blank" className="hover:text-accent transition" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white">
        <p>&copy; {new Date().getFullYear()} Learn Together. Designed by Md Abu Bakar Siddique</p>
      </div>
    </footer>
  );
};

export default Footer;
