import { FaUserAlt, FaDollarSign } from "react-icons/fa";
import { BsFillCartPlusFill, BsFillHouseDoorFill } from "react-icons/bs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Context/useAuth";
import LoadingSpinner from "../../LoadingSpinner";
import ErrorPage from "../../ErrorPage";

const MemberStatistics = () => {
  // const axiosSecure = useAxiosSecure();
  // //*
  // const {
  //   isLoading,
  //   isError,
  //   data: adminStats = [],
  //   // refetch,
  // } = useQuery({
  //   queryKey: ["adminStats"],
  //   queryFn: async () => {
  //     const result = await axios(`${import.meta.env.VITE_API_URL}/admin/stats`);
  //     return result.data;
  //   },
  // });
  // //*
  // console.log({ adminStats: adminStats });
  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  // if (isError) return <ErrorPage></ErrorPage>;
  //*
  // const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //*
  const {
    isLoading,
    isError,
    data: memberStats = [],
    // refetch,
  } = useQuery({
    queryKey: ["memberStats", user.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/member/stats/${user.email}`
      );
      return result.data;
    },
  });
  //*
  console.log("members", { memberStats: memberStats });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;
  return (
    <div>
      Customer Statistics Page
      <div className="mt-12">
        {/* small cards */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grow">
          {/* Total users */}
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
            >
              <FaDollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total users
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                120{" "}
              </h4>
            </div>
          </div> */}
          {/* Total clubs */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
            >
              <BsFillCartPlusFill className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total clubs
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {memberStats.imports}
              </h4>
            </div>
          </div>
          {/* Total Plants */}
          {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
            >
              <BsFillHouseDoorFill className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total memberships
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                120{" "}
              </h4>
            </div>
          </div> */}
          {/* Total events */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
            >
              <FaUserAlt className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total events
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {memberStats.products}
              </h4>
            </div>
          </div>
          {/* upcomming events */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
            >
              <FaUserAlt className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Upcomming events{" "}
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {memberStats.total}
              </h4>
            </div>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/*Sales Bar Chart */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            {/* Chart goes here.. */}
          </div>
          {/* Calender */}
          <div className=" relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
            {/* Calender */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberStatistics;
