import React from "react";
import { Link } from "react-router";

const NewMain = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row">
          <div>
            <img className="size-30  rounded-md" src={data.productImage} />
          </div>
          <div>
            <div>
              <div className="text-2xl font-bold pb-2"> {data.productName}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {data.category}
              </div>
              <p className="list-col-wrap text-xs py-2">{data.description}</p>
            </div>
            <div className="flex gap-3 ">
              <button className=" ">
                <p>originCountry : {data.originCountry}</p>
              </button>
              <button className="">
                <p>price : {data.price}</p>
              </button>
              <button className="">
                {" "}
                <p>availableQuantity : {data.availableQuantity}</p>
              </button>
              <button className="">
                <p>importquantity : {data.importedQuantity}</p>
              </button>
            </div>
          </div>
          <div className="space-x-4 px-2">
            <button className="btn">Delete</button>
            <button className="btn">Update</button>
            {/* <div> */}
            <Link
              to={`/productsdetails/${data.productID}`}
              className="font-bold btn "
            >
              See Details
            </Link>
            {/* </div> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NewMain;
