import React, { use, useRef } from "react";
import { Link, useLoaderData } from "react-router";
import MyContainer from "../Layout/MyContainer";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const ProductsDetails = () => {
  // const { productName } = datas;
  const data = useLoaderData();
  // const { _id } = useLoaderData();
  const { user } = use(AuthContext);
  const res = data.result;
  console.log("result : ", { res });
  const modelref = useRef(null);

  const hadlemodal = (e) => {
    e.preventDefault();
    modelref.current.showModal();
  };

  const handleclose = () => {
    // e.preventDefault();
  };
  const handleimportform = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const quantity = e.target.quantity?.value;
    console.log("hi", { displayName, email, quantity });
    const importQuantity = parseInt(quantity);
    // *

    const importData = {
      productName: res.productName,
      productImage: res.productImage,
      price: res.price,
      originCountry: res.originCountry,
      rating: res.rating,
      availableQuantity: res.availableQuantity,
      description: res.description,
      category: res.category,
      createdBy: user.email,
      createdAt: new Date(),
      importedBy: user.email,
      importedQuantity: importQuantity,
      productID: res._id,
    };
    console.log("data----", importData);

    // *
    // *
    fetch(`http://localhost:5000/allimportsproducts/${res._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(importData),
      // { res, importedBy: user.email, importquantity: quantity }
    })
      .then((result) => result.json())
      .then((data) => {
        toast.success("import successful");
        console.log(data, "user after save");
      })
      .catch((err) => {
        console.log(err);
      });
    // *
    // const displayName = e.target.name?.value;
    // const email = e.target.email?.value;
    // const quantity = e.target.quantity?.value;
    // console.log("hi", { displayName, email, quantity });
  };
  // const handleimport = (e) => {
  //   e.preventDefault();
  //   // *
  //   // fetch("http://localhost:5000/products", {
  //   //   method: "POST",
  //   //   headers: { "content-type": "application/json" },
  //   //   body: JSON.stringify({ ...res, importedBy: user.email }),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     toast.success("Signup successful");

  //   //     console.log(data, "user after save");
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   // *
  //   const displayName = e.target.name?.value;
  //   const email = e.target.email?.value;
  //   const quantity = e.target.quantity?.value;
  //   console.log("hi", { displayName, email, quantity, _id });
  // };
  return (
    <>
      <MyContainer>
        {/* <div>ProductsDetails </div>
        <div>{res.productName}</div>
        <img src={res.productImage} alt={res.productName} />
        <span>{res.price}</span>
        <p>{res.originCountry}</p>
        <p>{res.rating}</p>
        <p>{res.availableQuantity}</p>
        <p>{res.description}</p>
        <p>{res.category}</p>
        <p>{res.createdAt}</p> */}
        {/* <Link to="">import now</Link> */}
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
        {/* Open the modal using document.getElementById('ID').showModal() method */}

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
                {/* if there is a button in form, it will close the modal */}
                {/* <button className="btn">Done</button> */}
                <button onClick={handleclose} className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </MyContainer>
    </>
  );
};

export default ProductsDetails;
