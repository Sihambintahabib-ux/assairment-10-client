// import React, { use, useEffect, useRef, useState } from "react";
import React, { use, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
// import { Link, useLoaderData, useParams } from "react-router";
import MyContainer from "../Layout/MyContainer";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Layout/Loading";

const ProductsDetails = () => {
  // const { productName } = datas;
  // const { _id } = useLoaderData();
  //* data load by using params-loader
  // const data = useLoaderData();
  const { user, loading } = use(AuthContext);
  // const res = data.result;
  // console.log("result : ", { res });
  const modelref = useRef(null);

  //* data load by using useEffect
  const { id } = useParams();
  const [res, setres] = useState([]);

  //details : get
  useEffect(() => {
    // if (!user?.email) {
    //   console.log("⚠️ No user logged in");
    //   return;
    // }
    document.title = "Products Details - Import Export Hub";
    fetch(`http://localhost:5000/products/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setres(data.result);
        // toast.success("user details");
        // console.log(data, "user after save");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, user?.email]);

  const hadlemodal = () => {
    // e.preventDefault();
    modelref.current.showModal();
  };
  const handleclose = (e) => {
    e.preventDefault();
    modelref.current.close();
  };

  const handleimportform = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const quantity = e.target.quantity?.value;
    console.log("hi", { displayName, email, quantity });
    const importQuantity = parseInt(quantity);
    // const availableQuantity = parseInt(availableQuantity);

    // *
    const importData = {
      productName: res.productName,
      productImage: res.productImage,
      price: res.price,
      originCountry: res.originCountry,
      rating: res.rating,
      availableQuantity: parseInt(res.availableQuantity) || 0,
      description: res.description,
      category: res.category,
      // createdBy: user.email,
      // createdAt: new Date(),
      importedBy: user.email,
      importedQuantity: importQuantity,
      // productID: res._id,
    };
    // console.log("data----", importData);
    // *
    // *
    fetch(`http://localhost:5000/allimportsproducts/${res._id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(importData),
      // { res, importedBy: user.email, importquantity: quantity }
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data, "user after save");
        toast.success("import successful from allimports");

        if (data.success) {
          modelref.current.close();
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // *
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <MyContainer>
        {/* Responsive Product Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Mobile & Tablet: Stack vertically, Desktop: Side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Product Image */}
              <div className="w-full h-64 sm:h-80 lg:h-full">
                <img
                  src={res?.productImage}
                  alt={res?.productName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  {res?.productName}
                </h1>

                {/* Price & Rating */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl font-bold text-orange-600">
                    ${res?.price}
                  </span>
                  <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-800">
                      {res?.rating}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {res?.description}
                </p>

                {/* Product Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Origin</p>
                      <p className="font-semibold text-gray-900">
                        {res?.originCountry}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Available</p>
                      <p className="font-semibold text-gray-900">
                        {res?.availableQuantity} units
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Category</p>
                      <p className="font-semibold text-gray-900">
                        {res?.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Listed</p>
                      <p className="font-semibold text-gray-900">
                        {res?.createdAt
                          ? new Date(res.createdAt).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6">
                  <button
                    onClick={hadlemodal}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                  >
                    Import Product
                  </button>
                  <Link
                    to="/allproducts"
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200 text-center"
                  >
                    Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <dialog ref={modelref} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white max-w-md w-full mx-4">
            <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2">
              Import Product
            </h3>
            <p className="text-gray-600 mb-4">{res?.productName}</p>

            <form onSubmit={handleimportform} className="space-y-4">
              {/* User Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  User Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>

              {/* User Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  User Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity to Import
                </label>
                <input
                  name="quantity"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter quantity"
                  min="1"
                  max={res?.availableQuantity}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Available: {res?.availableQuantity} units
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleclose}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2.5 px-4 rounded-lg transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200"
                >
                  Confirm Import
                </button>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </MyContainer>
      {/* <MyContainer>
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img src={res?.productImage} alt={res?.productName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{res?.productName}</h2>
            <p>{res?.description}</p>
            <p>{res?.originCountry}</p>
            <p>{res?.rating}</p>
            <p>{res?.availableQuantity}</p>
            <p>{res?.category}</p>
            <p>{res?.createdAt}</p>
            <span>{res?.price}</span>
            <div className="card-actions justify-end">
              <button onClick={hadlemodal} className="btn btn-primary">
                import product
              </button>
            </div>
          </div>
        </div>

        <dialog ref={modelref} className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-white space-y-3">
            <h3 className="font-bold text-lg">{res?.productName}</h3>
            <p>{res?.description}</p>
            <h4 className="font-bold">Add quantity to import products : </h4>
            <form onSubmit={handleimportform}>
              <fieldset className="fieldset">
                <label className="label font-bold text-md text-black ">
                  User Name :
                </label>
                <input
                  name="name"
                  type="text"
                  className="input border-b-2 py-2"
                  // placeholder="Add quantity to import products "
                  defaultValue={user?.displayName}
                  readOnly
                />
                <label className="label font-bold text-md text-black ">
                  User Email :
                </label>
                <input
                  name="email"
                  type="email"
                  className="input border-b-2 py-2"
                  // placeholder="Add quantity to import products "
                  defaultValue={user?.email}
                  readOnly
                />
                <label className="label">Quantity</label>
                <input
                  name="quantity"
                  type="number"
                  className="input"
                  max={res?.availableQuantity}
                  min="1"
                  placeholder="Add quantity to import products "
                />
                <button
                  // onClick={handleimport}
                  className="btn"
                >
                  Done
                </button>
              </fieldset>
            </form>
            <div className="modal-action">
              <form method="dialog flex justify-between">
               
                <button onClick={handleclose} className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </MyContainer> */}
    </>
  );
};

export default ProductsDetails;
