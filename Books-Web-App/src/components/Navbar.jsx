import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/book-logo.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  // const [storage, setStorage] = React.useState();

  return (
    <div className="navbar bg-base-200 px-12">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl text-accent ">
          <img className="w-10" src={logo} alt="" /> Books
        </Link>
      </div>

      {!loggedInUser && (
        <div className="navbar-end flex gap-3">
          <Link to={"/login"} className="btn btn-active">
            Login
          </Link>
          <Link to={"/signup"} className="btn btn-accent">
            Sign Up
          </Link>
        </div>
      )}

      {loggedInUser && (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              {/* <li>
              <a>Settings</a>
            </li> */}
              <li>
                <button
                  onClick={() => {
                    localStorage.clear();
                    // setIslogged(false);
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
