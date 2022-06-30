import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Inventory</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">
            <Link to="/">Daily Task</Link>
          </a>
        </div>
        <div className="navbar-end">
          <div class="  hidden lg:flex">
            <ul class="menu menu-horizontal ">
              <li className="px-2 gap-4">
                <Link to="/">Home</Link>
                <Link to="/calender">Calendar</Link>
                <Link to="/todo">To-Do</Link>
                <Link to="/completetask">Completed Tasks</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
