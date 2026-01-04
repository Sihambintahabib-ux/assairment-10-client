import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdOutlineManageHistory } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <div className="">
        <MenuItem icon={FaUserCog} label="Manage Users" address="admin-users" />
        <MenuItem
          icon={MdOutlineManageHistory}
          label="Manage clubs"
          address="admin-clubs"
        />
        <MenuItem
          icon={MdOutlineManageHistory}
          label="View Payments"
          address="View-Payments"
        />
      </div>
    </>
  );
};

export default AdminMenu;
