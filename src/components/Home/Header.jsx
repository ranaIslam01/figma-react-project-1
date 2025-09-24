import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ==== Header with background image ==== */}
      <header className="bg-[url('/images/image.png')] h-140 bg-center mt-1 bg-cover md:mx-8 md:mt-26 mx-2 rounded-4xl relative">
        
        {/* ==== Navigation Bar ==== */}
        <nav
          className="
            flex justify-between items-center 
            fixed top-4 left-1/2 transform -translate-x-1/2 
            bg-white rounded-4xl px-6 py-2 
            w-[90%] max-w-6xl shadow-md z-50
          "
        >
          {/* ==== Logo (Desktop) ==== */}
          <div className="hidden md:block cursor-pointer">
            <img className="h-12" src="/images/image 7.png" alt="logo" />
          </div>

          {/* ==== Logo (Mobile) ==== */}
          <div className="md:hidden block">
            <img className="h-12" src="/images/logo.png" alt="mobile-logo" />
          </div>

          {/* ==== Desktop Menu ==== */}
          <div className="hidden [@media(min-width:1150px)]:block">
            <ul className="flex items-center gap-3 text-gray-600 font-semibold text-lg">
              {/* scale-103 Tailwind এ নেই, তাই scale-105 ব্যবহার করেছি */}
              <li className=" transition duration-100 hover:duration-100 rounded-2xl  text-[#F6931D] hover:border hover:border-red-200 cursor-pointer hover:bg-red-500 hover:text-white px-4 border border-transparent py-2 ">
                <Link to="/">Home</Link>
              </li>
              <li className=" transition duration-100 hover:duration-100 rounded-2xl  text-[#F6931D] hover:border hover:border-red-200 cursor-pointer hover:bg-red-500 hover:text-white px-4 border border-transparent py-2 ">
                <Link to="/about">About Us</Link>
              </li>
              <li className=" transition duration-100 hover:duration-100 rounded-2xl  text-[#F6931D] hover:border hover:border-red-200 cursor-pointer hover:bg-red-500 hover:text-white px-4 border border-transparent py-2 ">
                <Link to="/cyber-program">Cyber Program</Link>
              </li>
              <li className=" transition duration-100 hover:duration-100 rounded-2xl  text-[#F6931D] hover:border hover:border-red-200 cursor-pointer hover:bg-red-500 hover:text-white px-4 border border-transparent py-2 ">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* ==== Desktop Button ==== */}
          <div className="hidden [@media(min-width:1150px)]:block">
            <button className="btn btn:hover">
              Get in touch
            </button>
          </div>

          {/* ==== Mobile Menu Button ==== */}
          {/* আগের মতো div নয়, button ব্যবহার করেছি accessibility এর জন্য */}
          <button
            className="block [@media(min-width:1150px)]:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-2xl text-[#F6931D] cursor-pointer"
            />
          </button>

          {/* ==== Mobile Dropdown Menu ==== */}
          {isOpen && (
            <div className="absolute top-16 right-6 bg-white shadow-lg rounded-2xl p-6 w-48 z-50">
              <ul className="flex flex-col gap-4 text-gray-700">
                <li className="border flex justify-center items-center p-2 rounded-4xl border-orange-5000 text-orange-500">
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="border flex justify-center items-center p-2 rounded-4xl border-orange-5000 text-orange-500">
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li className="border flex justify-center items-center p-2 rounded-4xl border-orange-5000 text-orange-500">
                  <Link to="/cyber-program" onClick={() => setIsOpen(false)}>
                    Cyber Program
                  </Link>
                </li>
                <li className="border flex justify-center items-center p-2 rounded-4xl border-orange-5000 text-orange-500">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button className="bg-[#F6931D] text-white px-4 py-2 rounded-4xl mt-4 w-full hover:opacity-90 transition">
                Get in touch
              </button>
            </div>
          )}
        </nav>

        {/* ==== Hero Section ==== */}
        {/* -mt-32 এর বদলে pt-40 ব্যবহার করেছি responsive fix এর জন্য */}
        <div className="pt-40 md:pt-56 pb-20">
          <div className="flex justify-center items-center flex-col text-center md:w-160 w-10/12 mx-auto text-sm min-h-[30vh] gap-6">
            <h1 className="text-white text-4xl font-bold leading-snug">
              Empowering Underrepresented Communities in Tech
            </h1>
            <p className="text-gray-200 hidden md:block max-w-2xl">
              At Diversity Cyber Council, we are committed to bridging the gap
              in the tech industry by providing education, training, and
              staffing opportunities to underrepresented demographics.
            </p>
            <button className="bg-[#F6931D] text-white md:px-6 px-10 py-3 rounded-4xl hover:opacity-90 transition">
              Get involved
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
