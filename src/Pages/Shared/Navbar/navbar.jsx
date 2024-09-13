import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import img1 from "../../../assets/YumYum.png";
import "react-modern-drawer/dist/index.css";
import "typeface-libre-baskerville";
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { FaBlog } from "react-icons/fa6";
import { TbInfoCircle } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100;

      setIsSticky(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Conditionally apply green background for the reservation page
  const navbarBg = location.pathname === "/reservation" ? "bg-primary" : "bg-transparent";


  return (
    <div>
      <nav className={`${navbarBg} absolute z-50 w-full px-7 py-7`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <Link to="/" className="flex items-center">
                  <img
                    src={img1}
                    alt=""
                    className="h-full w-full md:h-24 md:w-48"
                  />
                </Link>
              </div>
            </div>
            <div className="flex">
              <div className="hidden md:block">
                <div className="ml-10 flex font-sans text-white items-baseline space-x-12">
                  <Link
                    to="/"
                    className="   rounded-md text-base font-semibold"
                  >
                    Home
                  </Link>
                  <Link
                    to="/menu"
                    className="   rounded-md text-base font-semibold"
                  >
                    Menu
                  </Link>
                  <Link
                    to="/blogs"
                    className="   rounded-md text-base font-semibold"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/about"
                    className="  rounded-md text-base font-semibold"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="   rounded-md text-base font-semibold"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="ml-7">
                <Link
                  to="/reservation"
                  className="px-7 py-4 border-[2px] text-white rounded-sm font-semibold text-base "
                >
                  Reservations
                </Link>
              </div>
            </div>

            <div className="ml-4 flex md:hidden">
              <button
                type="button"
                onClick={handleToggle}
                className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={handleToggle}
          direction="left"
          className="z-50"
          style={{
            position: "fixed",
            height: "100%",
            width: "250px",
            background: "#233000",
          }}
        >
          <div className="px-4 py-4 text-white">
            <Link to="/" className="">
              <img className="h-12 w-24 px-auto" src={img1} alt="Logo" />
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 mt-3 text-base"
              onClick={handleToggle}
            >
              <FaHome className="inline-block h-6 w-5 mr-2" /> Home
            </Link>
            <Link
              to="/menu"
              className="block px-4 py-2 mt-3 text-base"
              onClick={handleToggle}
            >
              <BiFoodMenu className="inline-block h-6 w-5 mr-2" /> Menu
            </Link>
            <Link
              to="/blogs"
              className="block px-4 py-2 text-base"
              onClick={handleToggle}
            >
              <FaBlog className="inline-block h-6 w-5 mr-2" /> BLogs
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-base"
              onClick={handleToggle}
            >
              <TbInfoCircle className="inline-block h-6 w-5 mr-2" /> About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-base"
              onClick={handleToggle}
            >
              <MdOutlineContactPhone className="inline-block h-6 w-5 mr-2" />{" "}
              Contact
            </Link>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
