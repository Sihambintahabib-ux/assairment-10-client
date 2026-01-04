import { toast } from "react-toastify";
import useAxiosSecure from "../../../../../Context/useAxiosSecure";

const UpdatePlantForm = ({ data, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.patch(`/club/${data._id}`, {
        email: data.managerEmail,
        // status: "reject",
        // updateAt,
      });
      //   toast.success("club reject");
      console.log(handleUpdate);
      refetch();
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleUpdate}>
        {/* Name */}
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-orange-400 focus:outline-orange-400rounded-md bg-white"
            id="name"
            type="text"
            placeholder="Club Name"
            // {...register("name", { required: "name is required" })}
          />
          {/* {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )} */}
        </div>
        {/* Email */}
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Email
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-orange-400 focus:outline-orange-400rounded-md bg-white"
            id="Email"
            type="text"
            placeholder="Email"
            // {...register("name", { required: "name is required" })}
          />
          {/* {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )} */}
        </div>
        {/* Img */}

        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Img
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-orange-400 focus:outline-orange-400rounded-md bg-white"
            id="img"
            type="file"
            placeholder="Img"
            // {...register("name", { required: "name is required" })}
          />
          {/* {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )} */}
        </div>
        {/* Submit Button */}

        <button
          type="submit"
          // onClick={handleReject}
          className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
        >
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlantForm;
