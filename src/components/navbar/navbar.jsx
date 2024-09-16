import { navLinks } from "../../data/data";
import logo from "../../assets/mdrn-logo.png";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import "./navbar.css";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleNavbar(navOpen) {
    setNavOpen(!navOpen);
    console.log(navOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#B6BBC2] shadow-lg rounded-2xl p-2 top-4"
          : "bg-transparent p-4 top-0"
      }`}
    >
      <div
        className={`flex justify-between items-center text-xl transition-all duration-300 ${
          scrolled ? "gap-1 p-2" : "gap-6 p-4"
        }`}
      >
        <img
          src={logo}
          alt="logo's png"
          className={`max-h-20 w-20 flex-initial object-contain cursor-pointer hover:animate-jiggle transition-all duration-300 ${
            scrolled ? "max-h-18 w-18" : "max-h-24 w-24"
          }`}
          onClick={() => (window.location.href = "#home")}
        />
        <ul
          className={`${
            navOpen ? "flex" : "hidden"
          } basis-1/2 flex-col lg:flex-row lg:flex gap-1 justify-center max-[1020px]:p-4 max-[1020px]:fixed max-[1020px]:top-24 max-[1020px]:left-[10%] bg-secondary lg:bg-transparent w-[80%] `}
        >
          {navLinks
            ? navLinks.map((navItems) => (
                <li
                  key={navItems.id}
                  className="max-[1020px]:hover:bg-accent text-primary lg:text-black lg:hover:text-accent w-full flex justify-center items-center h-8 transition-all duration-300 transform hover:text-2xl"
                >
                  <a href={navItems.id}>
                    <p>{navItems.title}</p>
                  </a>
                </li>
              ))
            : null}
        </ul>
        <div className="flex items-center justify-center">
          <button className="bg-gradient-to-r from-indigo-900 to-violet-700 text-primary rounded-lg order-last hover:contrast-75 lg:mx-0 transition-all duration-300 transform hover:pl-4 w-36 h-10">
            <span className="transition-all duration-300 transform group-hover:mr-2">
              Join us
            </span>
            <span className="transition-all duration-300 transform group-hover:ml-2">
              →
            </span>
          </button>
          <button
            onClick={() => toggleNavbar(navOpen)}
            className="order-last flex-initial p-2 lg:hidden focus:border-accent focus:bg-opacity-80 focus:bg-accent rounded transition-all duration-300 transform hover:scale-105 hover:bg-accent hover:bg-opacity-90"
          >
            {navOpen ? (
              <IoCloseOutline className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
