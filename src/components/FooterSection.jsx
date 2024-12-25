import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Using react-icons for social media

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f766e] to-[#273d35] text-white py-12 md:py-16 mt-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Social Media Icons with Stylish Background */}
        <div className="flex justify-center mb-8 space-x-6 md:space-x-8">
          <Link href="https://facebook.com">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full hover:scale-110 transition duration-300 w-12 h-12 md:w-16 md:h-16">
              <FaFacebook size={25} className="text-white" />
            </div>
          </Link>
          <Link href="https://twitter.com">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-full hover:scale-110 transition duration-300 w-12 h-12 md:w-16 md:h-16">
              <FaTwitter size={25} className="text-white" />
            </div>
          </Link>
          <Link href="https://linkedin.com">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-4 rounded-full hover:scale-110 transition duration-300 w-12 h-12 md:w-16 md:h-16">
              <FaLinkedin size={25} className="text-white" />
            </div>
          </Link>
          <Link href="https://instagram.com">
            <div className="bg-gradient-to-r from-pink-500 to-pink-700 p-4 rounded-full hover:scale-110 transition duration-300 w-12 h-12 md:w-16 md:h-16">
              <FaInstagram size={25} className="text-white" />
            </div>
          </Link>
        </div>

        {/* Footer Links (E-commerce Sections) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-4">Useful Links</h3>
            <ul>
              <li>
                <Link href="/about">
                  <span className="text-white hover:text-gray-400 transition duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-400 transition duration-300">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <span className="text-white hover:text-gray-400 transition duration-300">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <span className="text-white hover:text-gray-400 transition duration-300">Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* E-commerce Features */}
          <div>
            <h3 className="font-semibold mb-4">E-commerce</h3>
            <ul>
              <li>
                <Link href="/payment-methods">
                  <span className="text-white hover:text-gray-400 transition duration-300">Payments</span>
                </Link>
              </li>
              <li>
                <Link href="/checkout">
                  <span className="text-white hover:text-gray-400 transition duration-300">Checkout</span>
                </Link>
              </li>
              <li>
                <Link href="/order-tracking">
                  <span className="text-white hover:text-gray-400 transition duration-300">Order Tracker</span>
                </Link>
              </li>
              <li>
                <Link href="/return-policy">
                  <span className="text-white hover:text-gray-400 transition duration-300">Return Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul>
              <li>
                <Link href="/faq">
                  <span className="text-white hover:text-gray-400 transition duration-300">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/shipping-info">
                  <span className="text-white hover:text-gray-400 transition duration-300">Shipping Info</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-400 transition duration-300">Contact Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-lg bg-white-800 text-black"
              />
              <button type="submit" className="mt-2 px-4 py-2 bg-[#0f766e] rounded-lg hover:bg-[#ff6a00] transition duration-300 w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom (Copyright and Developer Info) */}
        <div className="text-center text-sm mt-4 p-4 rounded-lg">
          <p className="text-white font-semibold text-lg">
            &copy; {new Date().getFullYear()} <span className="font-bold text-white">REEBA</span>. All rights reserved.
          </p>
          <p className="text-white mt-2 text-xl font-bold">
            Designed & Developed by <span className="text-[#ff6a00]">REEBA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
