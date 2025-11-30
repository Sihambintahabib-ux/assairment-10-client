import React, { use } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";
import MyContainer from "../Layout/MyContainer";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateExport = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const res = data.result;
  console.log(res);
  console.log(user);

  // **
  // const handlexport = (e) => {
  //   // e.preventDefault();
  //   console.log("handlexport");
  //   const formdata = {
  //     productName: e.target.name?.value,
  //     productImage: e.target.image?.value,
  //     price: e.target.price?.value,
  //     originCountry: e.target.country?.value,
  //     rating: e.target.rating?.value,
  //     availableQuantity: e.target.quantity?.value,
  //     description: "",
  //     category: "",
  //     createdBy: user.email,
  //     createdAt: new Date(),
  //   };
  //   //*
  //   fetch("https://assairment10.vercel.app/products", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(formdata),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       toast.success("Signup successful");

  //       console.log(data, "user after save");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   //*
  //   console.log(formdata);
  // };
  //*

  const handlexportupdata = (e) => {
    e.preventDefault();
    console.log(e);
    const formdata = {
      productName: e.target.name?.value,
      productImage: e.target.image?.value,
      price: e.target.price?.value,
      originCountry: e.target.country?.value,
      rating: e.target.rating?.value,
      // availableQuantity: e.target.quantity?.value,
      description: e.target.description?.value,
      category: e.target.category?.value,
      // importedBy: e.target.importedBy?.value,
      // createdBy: user.email,
      // createdAt: new Date(),
    };
    console.log(formdata);
    //*
    fetch(`https://assairment10.vercel.app/products/${res._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/export");

        toast.success("update successful");

        console.log(data, "user after save");
      })
      .catch((err) => {
        console.log(err.message);
      });
    //*
    console.log(formdata);
  };
  //*

  return (
    <MyContainer>
      <div className=" w-90 mx-auto bg-base-100 p-5  shadow-2xl">
        <div className=" w-full">
          <form onSubmit={handlexportupdata} className="mx-auto  ">
            <fieldset className="fieldset">
              <label className="label">Product Name</label>
              <input
                name="name"
                defaultValue={res.productName}
                type="text"
                className="input"
                placeholder="Product Name"
              />
              <label className="label">Product Image</label>
              <input
                name="image"
                defaultValue={res.productImage}
                type="url"
                className="input"
                placeholder="Product Image"
              />
              <label className="label">description</label>
              <input
                name="description"
                defaultValue={res.description}
                type="text"
                className="input"
                placeholder="Product Image"
              />
              <label className="label">Price</label>
              <input
                name="price"
                defaultValue={res.price}
                type="number"
                className="input"
                placeholder="Price"
              />
              <label className="label"> Origin Country</label>
              <input
                name="country"
                defaultValue={res.originCountry}
                type="text"
                className="input"
                placeholder=" Origin Country"
              />
              <label className="label">Rating</label>
              <input
                name="rating"
                defaultValue={res.rating}
                type="number"
                className="input"
                placeholder=" Rating"
              />

              <label className="label">category</label>
              <input
                name="category"
                defaultValue={res.category}
                type="text"
                className="input"
                placeholder=" category"
              />

              <button className="btn btn-neutral mt-4">update export</button>
            </fieldset>
          </form>
        </div>
      </div>
    </MyContainer>
  );
};

export default UpdateExport;
