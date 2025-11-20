import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Exportsrouts = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handlexport = (e) => {
    e.preventDefault();
    console.log("handlexport");
    const formdata = {
      productName: e.target.name?.value,
      productImage: e.target.image?.value,
      price: e.target.price?.value,
      originCountry: e.target.country?.value,
      rating: e.target.rating?.value,
      availableQuantity: e.target.quantity?.value,
      description: e.target.description?.value,
      category: "",
      createdBy: user.email,
      createdAt: new Date(),
    };
    //*
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("export successful");
        navigate("/export");
        console.log(data, "user after save");
      })
      .catch((err) => {
        console.log(err);
      });
    //*
    console.log(formdata);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add New Export Products</h1>
          <p className="py-6">
            You can export your own products by adding the information.All
            exports products will be include in poduct list also can be viewd in
            My export route.
          </p>
        </div>
        <div className="card bg-base-100 w-full  shadow-2xl">
          <div className="card-body">
            <form onSubmit={handlexport}>
              <fieldset className="fieldset">
                <label className="label">Product Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Product Name"
                />
                <label className="label">description</label>
                <input
                  name="description"
                  // defaultValue={res.description}
                  type="text"
                  className="input"
                  placeholder="Product Image"
                />
                <label className="label">Product Image</label>
                <input
                  name="image"
                  type="url"
                  className="input"
                  placeholder="Product Image"
                />
                <label className="label">Price</label>
                <input
                  name="price"
                  type="text"
                  className="input"
                  placeholder="Price"
                />
                <label className="label"> Origin Country</label>
                <input
                  name="country"
                  type="text"
                  className="input"
                  placeholder=" Origin Country"
                />
                <label className="label">Rating</label>
                <input
                  name="rating"
                  type="text"
                  className="input"
                  placeholder=" Rating"
                />
                <label className="label">Available quantity</label>
                <input
                  name="quantity"
                  type="text"
                  className="input"
                  placeholder=" Available quantity"
                />

                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exportsrouts;
