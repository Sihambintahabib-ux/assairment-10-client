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
      availableQuantity: parseInt(e.target.quantity?.value),
      description: e.target.description?.value,
      category: e.target.category?.value,
      createdBy: user.email,
      createdAt: new Date(),
    };
    //*
    fetch("https://assairment10.vercel.app/products", {
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
    // <div className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-5xl font-bold">Add New Export Products</h1>
    //       <p className="py-6">
    //         You can export your own products by adding the information.All
    //         exports products will be include in poduct list also can be viewd in
    //         My export route.
    //       </p>
    //     </div>
    //     <div className="card bg-base-100 w-full  shadow-2xl">
    //       <div className="card-body">
    //         <form onSubmit={handlexport}>
    //           <fieldset className="fieldset">
    //             <label className="label">Product Name</label>
    //             <input
    //               name="name"
    //               type="text"
    //               className="input"
    //               placeholder="Product Name"
    //             />
    //             <label className="label">description</label>
    //             <input
    //               name="description"
    //               // defaultValue={res.description}
    //               type="text"
    //               className="input"
    //               placeholder="description"
    //             />
    //             <label className="label">Product Image</label>
    //             <input
    //               name="image"
    //               type="url"
    //               className="input"
    //               placeholder="Product Image"
    //             />
    //             <label className="label">Price</label>
    //             <input
    //               name="price"
    //               type="number"
    //               className="input"
    //               placeholder="Price"
    //             />
    //             <label className="label"> Origin Country</label>
    //             <input
    //               name="country"
    //               type="text"
    //               className="input"
    //               placeholder=" Origin Country"
    //             />
    //             <label className="label">Rating</label>
    //             <input
    //               name="rating"
    //               type="text"
    //               className="input"
    //               placeholder=" Rating"
    //             />
    //             <label className="label">category</label>
    //             <input
    //               name="category"
    //               // defaultValue={res.description}
    //               type="text"
    //               className="input"
    //               placeholder="category"
    //             />
    //             <label className="label">Available quantity</label>
    //             <input
    //               name="quantity"
    //               type="number"
    //               min="0"
    //               className="input"
    //               placeholder=" Available quantity"
    //               required
    //             />

    //             <button className="btn btn-neutral mt-4">Login</button>
    //           </fieldset>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 w-full max-w-6xl px-4 py-8">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Add New Export Products
          </h1>
          <p className="py-4 sm:py-6 text-sm sm:text-base">
            You can export your own products by adding the information. All
            export products will be included in the product list and can be
            viewed in the My Export route.
          </p>
        </div>

        {/* Form Section */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl flex-1">
          <div className="card-body p-6 sm:p-8">
            <form onSubmit={handlexport} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Product Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter description"
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Product Image URL
                  </span>
                </label>
                <input
                  name="image"
                  type="url"
                  className="input input-bordered w-full"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    className="input input-bordered w-full"
                    placeholder="0.00"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Rating</span>
                  </label>
                  <input
                    name="rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    className="input input-bordered w-full"
                    placeholder="0-5"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Origin Country
                    </span>
                  </label>
                  <input
                    name="country"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="e.g., USA"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <input
                    name="category"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="e.g., Electronics"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Available Quantity
                  </span>
                </label>
                <input
                  name="quantity"
                  type="number"
                  min="0"
                  className="input input-bordered w-full"
                  placeholder="Enter quantity"
                  required
                />
              </div>

              <button className="btn bg-red-500  w-full mt-6">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exportsrouts;
