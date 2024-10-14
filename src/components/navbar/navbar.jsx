import { navLinks } from "../../data/data";
import logo from "../../assets/mdrn-logo-side.png";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import useIsMounted from "./useIsMounted"; // Adjust the import path as needed
import "./navbar.css";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMounted = useIsMounted();

  function toggleNavbar() {
    setNavOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl z-50 transition-all duration-300 opacity-[0.98] ${
        scrolled
          ? "bg-[#F5F6F6] shadow-lg rounded-2xl p-2 top-4 border border-borderSoft translate-y-6 outline-0 !py-1.5 lg:!py-2 pr-3 pl-4 sm:pl-6 !bg-fill lg:!w-[940px] 2xl:!w-[1040px] h-13"
          : "bg-transparent top-0 border border-transparent py-2 sm:py-3 xl:py-4 h-13"
      }`}
    >
      <div
        className={`flex items-center justify-between text-xl transition-all duration-300 ${
          scrolled ? "gap-1 p-2" : "gap-3 p-2"
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className="h-14 w-auto flex-initial object-contain cursor-pointer hover:animate-jiggle transition-all duration-300"
          onClick={() => (window.location.href = "#home")}
        />
        <ul
          className={`navbar ${
            isMounted.current && window.innerWidth <= 1020
              ? navOpen
                ? "navbar-open"
                : "navbar-closed"
              : ""
          } ${
            isMounted.current ? "mounted" : ""
          } basis-1/2 flex-col lg:flex-row lg:flex gap-1 justify-center max-[1020px]:p-4 max-[1020px]:fixed max-[1020px]:top-24 max-[1020px]:left-[10%] bg-secondary lg:bg-transparent w-[80%]`}
        >
          {navLinks.map((navItems) => (
            <li
              key={navItems.id}
              className="max-[1020px]:hover:bg-secondary text-primary lg:text-black lg:hover:text-secondary w-full flex justify-center items-center h-8 transition-all duration-300 transform hover:scale-105"
            >
              <a href={navItems.id}>
                <p>{navItems.title}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <button
            className={`rounded-md order-last transition-all duration-300 transform ${
              scrolled
                ? "bg-gradient-to-r from-indigo-900 to-violet-700 py-2 px-4 text-md items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-white focus:border bg-surface border-borderSoft hover:contrast-75 hidden sm:flex ml-auto lg:ml-0 w-36 h-10"
                : "bg-white group py-2 px-4 rounded-md text-md items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-black focus:border bg-surface border-borderSoft hover:contrast-75 hidden sm:flex ml-auto lg:ml-0 w-36 h-10"
            }`}
          >
            <span className="transition-all duration-300 transform group-hover:mr-1 font-semibold">
              Join us
            </span>
            <span
              className={`transition-all duration-300 transform ${
                scrolled ? "hover:ml-1" : "group-hover:ml-1"
              }`}
            >
              →
            </span>
          </button>
          <button
            onClick={toggleNavbar}
            className="order-last flex-initial p-2 lg:hidden focus:border-secondary focus:bg-opacity-80 focus:bg-secondary rounded transition-all duration-300 transform hover:scale-105 hover:bg-secondary hover:bg-opacity-90"
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
