import "./hero.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const hrElement = document.querySelector(".expand-hr");
    if (hrElement) {
      hrElement.classList.add("expanded");
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen pt-16 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center p-2 max-w-4xl w-full">
        <div className="md:w-1/2 p-2">
          <h1 className="heading font-bold text-center md:text-left">
            <span>Tech For Tomorrow</span>
            <span className="block"> Actions for Today</span>
          </h1>
          <br />
          <hr className="expand-hr my-4 mx-auto" />
          <p className="sub-heading text-center md:text-left font-semibold px-2 text-gray-700">
            We&apos;re a group of young innovators dedicated to bridging the gap between knowledge and technology. Our mission is to promote open-source development, community service, and voluntary work to create a positive impact. Through projects, research, and educational resources, we help students and enthusiasts unlock their potential and take control of their learning.
            <br />
            <br />
            Join us as we embark on this exciting journey of innovation, service, and collaboration to make tech knowledge accessible to everyone.
          </p>
          <button
            className="bg-white group py-2 px-4 rounded-md text-md items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-black focus:border bg-surface border-borderSoft hover:contrast-75 hidden md:flex mx-auto lg:ml-0 w-36 h-10 mt-4"
          >
            <span className="transition-all duration-300 transform group-hover:mr-1 font-semibold">
              Join us
            </span>
            <span className="transition-all duration-300 transform group-hover:ml-1">
              →
            </span>
          </button>
        </div>
        <div className="md:w-1/2 p-2">
          <img
            src="https://via.placeholder.com/500"
            alt="Innovative Tech"
            className="rounded-lg shadow-lg w-full"
          />
          <button
            className="bg-white group py-2 px-4 rounded-md text-md items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-black focus:border bg-surface border-borderSoft hover:contrast-75 flex mx-auto lg:ml-0 w-36 h-10 mt-4 md:mt-0 md:hidden"
          >
            <span className="transition-all duration-300 transform group-hover:mr-1 font-semibold">
              Join us
            </span>
            <span className="transition-all duration-300 transform group-hover:ml-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}