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
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={productImage} className="size-60" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="  p-5 badge badge-secondary ">{category}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{originCountry}</div>
            <div className="badge badge-outline">
              Quanty {availableQuantity}
            </div>
          </div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${price}</div>
            <div className="badge badge-outline">
              {rating}
              <CiStar></CiStar>
            </div>
          </div>
        </div>
        <div className=" btn bg-orange-600 w-full text-center font-bold ">
          <Link to={`/productsdetails/${_id}`}> Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
