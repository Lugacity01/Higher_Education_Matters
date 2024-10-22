// import React from 'react'

import { Link, NavLink } from "react-router-dom";
import { BlueLogo, WhiteLogo } from "../Logo";
import mobile from "../../assets/images/mobile-dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const menus = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/program", label: "Program" },
    { path: "/success-stories", label: "Success Stories" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="group absolute left-0 top-0 z-20 w-full">
      <div className="flex justify-between overflow-x-hidden px-8 py-4 transition-all duration-300 ease-linear group-hover:bg-white md:px-12 lg:py-[25.72px] 2xl:px-20">
        {/* Logo */}
        <div className="nav-logo">
          <WhiteLogo className="block group-hover:hidden lg:h-full lg:w-full h-[35.45px] w-[140.05px]" />
          <BlueLogo className="hidden group-hover:block lg:h-full lg:w-full h-[35.45px] w-[140.05px]" />
        </div>

        {/* Navigation */}
        <div>
          <div
            className={`fixed inset-0 z-10 w-full md:h-fit md:w-auto ${
              showNav
                ? "translate-x-0 duration-150 ease-linear"
                : "translate-x-full duration-150 ease-linear"
            } left-0 top-0 gap-6 bg-white pb-12 md:relative md:flex md:translate-x-0 md:bg-transparent md:pb-0`}
          >
            {/* Mobile logo and close button */}
            <div className="flex items-center justify-between px-10 py-6 md:hidden">
              <img src={mobile} alt="mobile logo" className=" h-[35.45px] w-[40.05px]" />
              <button
                onClick={() => setShowNav((prev) => !prev)}
                className="block text-2xl text-[#23314a]"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>

            {/* Menu items */}
            <ul className="flex flex-col items-start gap-2 lg:px-12 text-[#23314A] md:flex-row md:items-center px-8 md:text-white">
              {menus.map((menu, i) => (
                <li
                  key={i}
                  onClick={() => setShowNav(false)}
                  className="font-[400]  hover:text-gray-300"
                >
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#c3d6f8]  py-2 px-4 border-b-2 border-[#d6e2f7] group-hover:border-[#204077]"
                        : "py-2 px-4 transition-all duration-400 ease-linear group hover:translate-x-9 hover:border-b-2 hover:border-[#142542] group-hover:text-[#23314A]"
                    }
                  >
                    {menu.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* "Get Started" button */}
            <Link to={"/get-started"}>
              <button className="hidden rounded-lg  bg-[#f4f5f7] px-4 py-2 capitalize text-[#23314A] group-hover:bg-[#1A3855] group-hover:text-[#FFEBF0] md:block">
                Get Started
              </button>
            </Link>
          </div>

          {/* Hamburger menu button for mobile */}
          <button
            className="items-center text-2xl text-white group-hover:text-[#23314A] md:hidden"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
