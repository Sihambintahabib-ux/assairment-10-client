import { Outlet } from "react-router";
import Sidebar from "../Layout/Dashboard/Sidebar";
import DashboadNavbar from "../Layout/Dashboard/Common layout/DashboadNavbar";
import { AuthContext } from "../../Context/AuthContext";

const DashboardLayout = () => {
  return (
    <div>
      {/* <DashboadNavbar></DashboadNavbar> */}

      <div className="relative min-h-screen md:flex bg-white">
        <div className="flex  flex-col justify-between bg-red-400 ">
          {/* Top Side: Sidebar Component */}
          {/* <DashboadNavbar></DashboadNavbar> */}

          {/* Left Side: Sidebar Component */}
          <Sidebar />
        </div>
        {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        similique.
      </div> */}
        {/* Right Side: Dashboard Dynamic Content */}
        <div className="flex-1  md:ml-64">
          <div className="p-5 bg-gray-200">
            {" "}
            <DashboadNavbar></DashboadNavbar>
          </div>
          <div className="p-5">
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
