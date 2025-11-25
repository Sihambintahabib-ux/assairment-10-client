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
