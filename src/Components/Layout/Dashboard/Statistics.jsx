import useRole from "../../../Context/useRole";
import LoadingSpinner from "../LoadingSpinner";
import AdminStatistics from "./statistics/AdminStatistics";
import ManagerStatistics from "./statistics/ManagerStatistics";
import MemberStatistics from "./statistics/MemberStatistics";

const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      {/* <AdminStatistics /> */}
      {role === "member" && <MemberStatistics />}
      {role === "menager" && <ManagerStatistics />}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;
