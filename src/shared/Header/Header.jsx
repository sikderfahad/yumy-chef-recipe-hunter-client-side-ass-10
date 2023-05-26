import React, { useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo-dark.png";
import shapeCurve from "../../assets/img/bg-curve.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handledLoginBtn = () => navigate("/login");

  const [loginToggle, setLoginToggle] = useState(true);

  const routes = [
    { path: "/", label: "Home" },

    { path: "/blogs", label: "Blog" },
  ];

  const [open, setOpen] = useState(false);

  const [isBg, setIsBg] = useState(false);

  const setHeaderBg = () => setIsBg(!isBg);

  return (
    <header className={`md:py-5 py-4 header relative`}>
      <nav className="md:w-10/12 w-11/12 mx-auto flex items-center justify-between">
        <div className="logo">
          <img className="w-[100px] md:w-auto" src={logo} alt="" />
        </div>
        <div className="mebubar">
          <div
            className="lg:hidden"
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(!open)}
            onClick={() => setOpen(!open)}
          >
            <span className="text-2xl">
              {open ? (
                <FontAwesomeIcon icon={faAnchor}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
              )}
            </span>
          </div>
          <ul
            className={`lg:static  z-[999] absolute right-0 ${
              open ? "top-20 md:top-12" : "-top-96"
            }  lg:bg-transparent bg-gray-200 p-4 rounded-md duration-200`}
          >
            {routes.map((route, idx) => (
              <Nav route={route} key={idx} setBg={setHeaderBg}></Nav>
            ))}
          </ul>
        </div>

        <div
          className="text-right"
          onClick={() => setLoginToggle(!loginToggle)}
        >
          {loginToggle ? (
            <button
              onClick={handledLoginBtn}
              className="relative w-[150px] inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative w-full text-xl font-semibold md:px-8 px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </button>
          ) : (
            <Link to={"/signup"}>
              <button className="relative w-[150px] inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative w-full text-xl font-semibold md:px-8 px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Sign up
                </span>
              </button>
            </Link>
          )}
        </div>
      </nav>
      <div className="shape-top absolute z-[2]">
        <img src={shapeCurve} alt="" />
      </div>
    </header>
  );
};

export default Header;
