import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Main = ({ data }) => {
  const {
    _id,
    productName,
    productImage,
    price,
    originCountry,
    rating,
    availableQuantity,
    description,
    category,
    // createdAt,
  } = data;
  return (
    // <div className="card bg-base-100 w-96 shadow-sm">
    //   <figure>
    //     <img src={productImage} className="size-60" alt="Shoes" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       {productName}
    //       <div className="  p-5 badge badge-secondary ">{category}</div>
    //     </h2>
    //     <p>{description}</p>
    //     <div className="card-actions justify-between">
    //       <div className="card-actions justify-between">
    //         <div className="badge badge-outline">{originCountry}</div>
    //         <div className="badge badge-outline">
    //           Quanty {availableQuantity}
    //         </div>
    //       </div>
    //       <div className="card-actions justify-between">
    //         <div className="badge badge-outline">${price}</div>
    //         <div className="badge badge-outline">
    //           {rating}
    //           <CiStar></CiStar>
    //         </div>
    //       </div>
    //     </div>
    //     <div className=" btn bg-orange-600 w-full text-center font-bold ">
    //       <Link to={`/productsdetails/${_id}`}> Details</Link>
    //     </div>
    //   </div>
    // </div>

    <div className="card bg-base-100 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-sm mx-auto">
      <figure className="px-4 pt-4">
        <img
          src={productImage}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
          alt={productName}
        />
      </figure>
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-base sm:text-lg md:text-xl flex-col sm:flex-row items-start sm:items-center gap-2">
          <span className="flex-1">{productName}</span>
          <div className="badge badge-secondary p-3 sm:p-4 text-xs sm:text-sm">
            {category}
          </div>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Info Badges - Stacks on mobile, 2 rows on larger screens */}
        <div className="card-actions flex-col sm:flex-row justify-between gap-2 sm:gap-3 mt-2">
          <div className="flex gap-2 flex-wrap">
            <div className="badge badge-outline text-xs sm:text-sm py-3 px-3">
              {originCountry}
            </div>
            <div className="badge badge-outline text-xs sm:text-sm py-3 px-3">
              Qty: {availableQuantity}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="badge badge-outline text-xs sm:text-sm py-3 px-3">
              ${price}
            </div>
            <div className="badge badge-outline text-xs sm:text-sm py-3 px-3 flex items-center gap-1">
              {rating}
              <CiStar />
            </div>
          </div>
        </div>

        {/* Button - Full width on mobile, auto on larger screens */}
        <Link
          to={`/productsdetails/${_id}`}
          className="btn bg-orange-600 hover:bg-orange-700 text-white w-full text-center font-bold mt-4 text-sm sm:text-base"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Main;
