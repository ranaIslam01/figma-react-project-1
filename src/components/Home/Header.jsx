import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-[url('/images/image.png')] md:mx-10 mx-4 mt-4 pt-5 bg-center bg-cover md:h-170 h-150 rounded-4xl">
        <nav className="flex justify-between items-center bg-white mx-8 rounded-4xl px-6 py-1 relative">
          <div className="hidden md:block">
            <img className="h-12" src="/images/image 7.png" alt="logo" />
          </div>
          <div className="md:hidden block">
            <img className="h-12" src="/images/logo.png" alt="mobile-logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex gap-8">
              <ul className="flex gap-6 items-center text-gray-500 font-semibold text-lg">
                <li className="hover:underline hover:scale-103 hover:text-red-600 cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:underline hover:scale-103 hover:text-red-600 cursor-pointer">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="hover:underline hover:scale-103 hover:text-red-600 cursor-pointer">
                  <Link to="/cyber-program">Cyber Program</Link>
                </li>
                <li className="hover:underline hover:scale-103 hover:text-red-600 cursor-pointer">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <button className="bg-[#F6931D] text-white px-4 py-2 rounded-4xl">
                Get in touch
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-2xl text-gray-600 cursor-pointer"
            />
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-16 right-6 bg-white shadow-lg rounded-2xl p-6 w-48 md:hidden z-50">
              <ul className="flex flex-col gap-4 text-gray-700">
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                </li>
                <li>
                  <Link to="/cyber-program" onClick={() => setIsOpen(false)}>Cyber Program</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </li>
              </ul>
              <button className="bg-[#F6931D] text-white px-4 py-2 rounded-4xl mt-4 w-full">
                Get in touch
              </button>
            </div>
          )}
        </nav>

        <div className="md:-mt-0 -mt-32">
          <div className="flex justify-center items-center flex-col text-center md:w-160 w-10 mx-auto text-sm h-screen gap-4">
            <h1 className="text-white text-4xl font-bold">
              Empowering Underrepresented Communities in Tech
            </h1>
            <p className="text-gray-400 hidden md:block">
              At Diversity Cyber Council, we are committed to bridging the gap
              in the tech industry by providing education, training, and
              staffing opportunities to underrepresented demographics.
            </p>
            <button className="bg-[#F6931D] text-white md:px-4 px-10 py-2 rounded-4xl">
              Get involved
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
