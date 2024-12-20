import { FaDiscord, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import logo from "../../images/mdrn-logo-side.png";
import { navLinks } from "../../data/data";
import { Link } from "react-scroll";

const socialLinks = [
  {
    name: "facebook",
    icon: <FaFacebookF />,
    link: "https://facebook.com/mdrn.nepal",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/mdrn.np",
  },
  {
    name: "youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@MDRNNepal",
  },
  {
    name: "discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/cWwp2w2GwZ",
  },
];
export default function Footer() {
  return (
    <div className="h-auto mb-[-7px] sm:mx-[-3rem] relative bottom-0 rounded-lg shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10  backdrop-filter backdrop-blur-sm px-8 sm:px-32 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10">
            <h1 className="heading mb-2 tracking-normal text-secondary text-left">
              Tech For Tomorrow, Actions for Today
            </h1>
            <p className="text-justify text-xl w-[90%]">
              If you have any further queries please contact us through. We are
              always ready to help you and your tech journey.
            </p>
          </div>
          <div className="contact text-secondary w-[40%] flex flex-col md:content-end flex-wrap">
            <h3 className="text-2xl max-[400px]:leading-3 min-[400px]:mb-2 font-extrabold text-left">
              Contact Us
            </h3>
            <ul>
              <li className="flex flex-row items-center justify-start gap-2">
                <MdMailOutline />{" "}
                <a href="mailto:info@mdrn.social">info@mdrn.social</a>
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <FaDiscord />{" "}
                <a href="https://discord.gg/cWwp2w2GwZ">MDRN Nepal</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between gap-2 sm:gap-4">
          <img src={logo} alt="logo" className="w-24 min-[380px]:w-40" />

          <div className="nav flex flex-row w-full items-center justify-between mx-8 max-lg:hidden">
            {navLinks
              ? navLinks.map((navItems) => (
                  <li
                    key={navItems.id}
                    className="text-primary lg:text-gray-500 lg:hover:text-secondary w-auto flex justify-center items-center h-8 transition-all duration-300 transform text-2xl"
                  >
                    <a href={navItems.id}>
                    <Link
               to={navItems.id} 
               smooth={true}
               duration={500} 
               offset={-350} 
             >
               <p>{navItems.title}</p>
             </Link>
                    </a>
                  </li>
                ))
              : null}
          </div>
          <div className="socials flex flex-row justify-items-end gap-2 items-center w-[30%]">
            {socialLinks.map((socialItems) => {
              {
                return (
                  <a
                    key={socialItems.name}
                    href={socialItems.link}
                    target="_blank"
                    className="text-secondary lg:hover:text-secondary w-full flex justify-end items-center"
                  >
                    {socialItems.icon}
                  </a>
                );
              }
            })}
          </div>
        </div>
        <hr />
        <h3 className="text-gray-500 text-center justify-end">
          Copyright &copy; 2024 MDRN Nepal{" "}
        </h3>
      </div>
    </div>
  );
}
