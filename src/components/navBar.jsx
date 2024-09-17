import { navLinks } from "../data/data";
import logo from "../assets/mdrn-logo.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNavbar(navOpen) {
    setNavOpen(!navOpen);
    console.log(navOpen);
  }

  return (
    <div className="flex justify-between items-center font-bold text-lg">
      <img
        src={logo}
        alt="logo's png"
        className="max-h-24 w-24 flex-initial object-contain"
      />
      <ul
        className={`${
          navOpen ? "flex" : "hidden"
        } basis-1/2 flex-col lg:flex-row lg:flex gap-4 justify-center max-[1020px]:p-8 max-[1020px]:fixed max-[1020px]:top-24 max-[1020px]:left-[10%] bg-secondary lg:bg-transparent w-[80%] `}
      >
        {navLinks
          ? navLinks.map((navItems) => (
              <li
                key={navItems.id}
                className="max-[1020px]:hover:bg-accent text-primary lg:text-black lg:hover:text-accent lg:hover:font-extrabold w-full flex justify-center items-center h-10"
              >
                <a href={navItems.id}>
                  <p>{navItems.title}</p>
                </a>
              </li>
            ))
          : null}
      </ul>
      <div className="flex items-center justify-center">
        <button className="bg-accent w-28 h-12 text-primary rounded-lg order-last hover:contrast-75 mr-4 lg:mx-0">
          Join Us
        </button>
        <button
          onClick={() => toggleNavbar(navOpen)}
          className="order-last flex-initial p-2 lg:hidden focus:border-accent focus:bg-opacity-80 focus:bg-accent rounded"
        >
          {navOpen ? (
            <IoCloseOutline className="w-6 h-6" />
          ) : (
            <RxHamburgerMenu className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
