import { navLinks } from "../data/data";
import logo from "../assets/mdrn-logo.png";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center mx-28 font-bold text-lg">
      <img
        src={logo}
        alt="logo's png"
        className="max-h-24 w-24 flex-initial object-contain"
      />
      <ul className="basis-1/2 flex justify-between">
        {navLinks
          ? navLinks.map((navItems) => (
              <li key={navItems.id}>
                <a href={navItems.id}>
                  <p>{navItems.title}</p>
                </a>
              </li>
            ))
          : null}
      </ul>
      <button className="bg-accent w-28 h-12 text-primary rounded-lg order-last hover:contrast-75">
        Join Us
      </button>
    </div>
  );
}
