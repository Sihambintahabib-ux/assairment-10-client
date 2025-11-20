import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import MyContainer from "./MyContainer";

const Nav = () => {
  const { user, logout } = use(AuthContext);

  const links = (
    <>
      {/* All Products,My Exports, My Imports, Add Exportroutes */}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allproducts">All Products</NavLink>
      </li>
      {/* <li>
        <NavLink to="/productsdetails">products details</NavLink>
        <NavLink to={`/productsdetails/${_id}`}>products details</NavLink>
      </li> */}
      <li>
        <NavLink to="/export">My Exports</NavLink>
      </li>
      <li>
        <NavLink to="/my-imports">My Imports</NavLink>
        {/* <NavLink to="/import">My Imports</NavLink> */}
      </li>
      <li>
        <NavLink to="/exportsrouts">Add Export routes</NavLink>
      </li>
    </>
  );

  const handlelogout = (e) => {
    e.preventDefault();
    console.log("handlelogout");
    logout();
  };

  //*theam code :
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    setTheme(e ? "dark" : "light");
  };

  //*

  const resigter = (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        {/* <label className="label font-bold text-md text-black ">
          Theam Toggle
        </label>{" "}
        <input
        // onChange={}
        // type="checkbox"
        // defaultChecked={localStorage.getItem("theme") === "dark"}
        // className="toggle"
        /> */}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn border-none  text-xl">
          BuyGoods<span className="text-red-500">BD</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" space-x-2 p-1 m-5">
            {" "}
            <span className="btn border-none m-1 ">{user.displayName}</span>
            <a className="btn border-none" onClick={handlelogout}>
              logout
            </a>
          </div>
        ) : (
          <div className="  list-none flex gap-5 p-1 m-5 ">{resigter}</div>
        )}
      </div>
      <div>
        {/* <label className="label font-bold  text-black ">Theam Toggle</label>{" "} */}
        <input
          onChange={(e) => handleTheme(e.target.checked)} // value
          type="checkbox"
          defaultChecked={localStorage.getItem("theme") === "dark"}
          className="toggle border-2 "
        />
        {/* <input type="checkbox" defaultChecked className="toggle border" /> */}
      </div>
    </div>
  );
};

export default Nav;
