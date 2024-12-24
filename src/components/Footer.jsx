

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-xl font-bold">Learn Together</h2>
          <p className="mt-2 text-gray-400">
            Empowering learning, one connection at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@learntogether.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">
            Address: 123 Learning Lane, Knowledge City
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2024 Learn Together. All Rights Reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;