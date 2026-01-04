import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
const ManagersMenu = () => {
  return (
    <>
      <div className="">
        <MenuItem
          icon={BsFillHouseAddFill}
          label="Add club"
          address="add-club"
        />
        <MenuItem
          icon={MdHomeWork}
          label="Club Members"
          address="clubmembers"
        />
        <MenuItem
          icon={MdHomeWork}
          label="Manager Clubs"
          address="managerClubs"
        />
        <MenuItem icon={MdHomeWork} label="Add Events" address="add-events" />
        <MenuItem
          icon={MdHomeWork}
          label="Events Management"
          address="events-management"
        />
        <MenuItem
          icon={MdHomeWork}
          label="Event Registrations"
          address="event-registrations"
        />
      </div>
    </>
  );
};

export default ManagersMenu;
