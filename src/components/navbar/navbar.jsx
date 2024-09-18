import { navLinks } from "../../data/data";
import logo from "../../assets/mdrn-logo.png";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import "./navbar.css";

export default function NavBar() {
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
          ? "bg-[#B6BBC2] shadow-lg rounded-2xl p-2 top-4 border border-borderSoft translate-y-6 outline-0 !py-3 lg:!py-3.5 pr-3 pl-4 sm:pl-6 !bg-fill lg:!w-[940px] 2xl:!w-[1040px]"
          : "bg-transparent top-0 border border-transparent py-4 sm:py-5 xl:py-6"
      }`}
    >
      <div
        className={`flex items-center justify-between text-xl transition-all duration-300 ${
          scrolled ? "gap-1 p-2" : "gap-6 p-4"
        }`}
      >
        <img
          src={logo}
          alt="logo's png"
          className={`max-h-20 w-20 flex-initial object-contain cursor-pointer hover:animate-jiggle transition-all duration-300 ${
            scrolled ? "max-h-16 w-16" : "max-h-20 w-20"
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
          <button
            className={`rounded-md order-last transition-all duration-300 transform ${
              scrolled
                ? "bg-gradient-to-r shadow-md from-indigo-900 to-violet-700 py-2.5 px-6 text-md items-center gap-2.5 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-primary focus:border bg-surface border-borderSoft hover:contrast-75 hidden sm:flex ml-auto lg:ml-0 w-40 h-12"
                : "bg-primary  shadow-md group py-[9px] px-6 rounded-md text-md items-center gap-2.5 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-black focus:border bg-surface border-borderSoft hover:contrast-75 hidden sm:flex ml-auto lg:ml-0 w-40 h-12"
            }`}
          >
            <span className="transition-all duration-300 transform group-hover:mr-1 font-semibold">
              Join us
            </span>
            <span className="transition-all duration-300 transform group-hover:ml-1">
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
