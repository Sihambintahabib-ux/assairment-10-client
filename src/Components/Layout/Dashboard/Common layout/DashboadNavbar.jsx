import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../../Context/AuthContext";

const DashboadNavbar = () => {
  const { user, logout } = use(AuthContext);

  const handlelogout = (e) => {
    e.preventDefault();
    console.log("handlelogout");
    logout();
  };

  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-4xl font-bold">Dashboad</h1>
      {user && (
        <div className="flex items-center justify-end gap-2">
          {/* User Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt={user.displayName || "User"}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-10 p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard Overview</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-imports">My Imports</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-export">My Exports</NavLink>
              </li>
              <li>
                {/* <button onClick={handlelogout} className="text-primary">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                      />
                                    </svg>
                                    Logout
                                  </button> */}
                <Link to="/dashboard/profile" className="text-primary">
                  View Profile
                </Link>
              </li>
              <li>
                <button onClick={handlelogout} className="text-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
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

export default DashboadNavbar;
