import React from "react";
import { Link, Links, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ImportMain = ({ data }) => {
  //   console.log(data);
  //*
  const navigate = useNavigate();
  console.log(data);
  const handledelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my-import/${data._id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            navigate("/allproducts");
            console.log(data, "user after save");
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  //*

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
            {/* <NavLink to="" className="btn">
              Delete
            </NavLink> */}
            <button onClick={handledelete} className="btn">
              Delete
            </button>
            {/* <NavLink to={`/UpdateImport/${data.productID}`} className="btn">
              Update
            </NavLink> */}
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

export default ImportMain;
