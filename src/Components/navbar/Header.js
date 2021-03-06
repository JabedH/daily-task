import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const HandleLogout = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="px-2 gap-4">
                <Link to="/">Home</Link>
                <Link to="/completetask">Completed Tasks</Link>
                <Link to="/todo">To-Do</Link>
                <Link to="/calender">Calendar</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            <Link to="/">Daily Task</Link>
          </a>
        </div>
        <div className="navbar-end">
          <div className="  hidden lg:flex">
            <ul className="menu menu-horizontal ">
              <li className="px-2 gap-4">
                <Link to="/">Home</Link>
                <Link to="/completetask">Completed Tasks</Link>
                <Link to="/todo">To-Do</Link>
                <Link to="/calender">Calendar</Link>
              </li>
            </ul>
          </div>
          <div className=" px-2">
            <a className="btn">
              {user ? (
                <Link onClick={() => HandleLogout()} to="/login">
                  Logout
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
