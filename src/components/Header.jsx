import React from "react";
import img from "../Assets/language-svgrepo-com.svg";
import logoimg from "../Assets/output.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-nav absolute bg-gradient-to-b from-black w-full z-10">
        <div className="header-logo flex justify-between items-center px-48 py-3.5">
          <Link to={"/"}>
            <img className="w-150 h-20 " src={logoimg} alt="header-logo" />
          </Link>

          <div className="lt-wrapper flex justify-between items-center w-56">
            <div
              className="select-ln-container flex items-center justify-center border rounded-md  py-0.5 pl-2.5 pr-2"
              style={{ border: "1px solid rgba(255, 255, 255, 0.3)" }}
            >
              <div className="lang-logo max-w-4 max-h-4 ">
                <img src={img} alt="ln-logo" />
              </div>
              <select
                name="selectln"
                id="select-ln"
                className=" text-white px-1.5 py-0.5"
                style={{ background: "transparent" }}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>
            <div className="signin-link">
              <Link to={"/sign-in"}>
                <span className="text-white px-5 py-1.5 rounded-md bg-customRed hover:bg-red-900">
                  Sign In
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
