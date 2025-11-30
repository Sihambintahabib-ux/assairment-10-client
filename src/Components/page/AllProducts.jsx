import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Main from "../Layout/Main";
import MyContainer from "../Layout/MyContainer";
import { toast } from "react-toastify";

const AllProducts = () => {
  const datas = useLoaderData();
  console.log(datas);
  const [products, setproducts] = useState(datas);
  const [loading, setloading] = useState(false);
  const handlesearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setloading(true);

    fetch(`https://assairment10.vercel.app/search?search=${search_text}`)
      .then((result) => result.json())
      .then((data) => {
        toast.success("search successful");
        console.log(data, "user after save");
        setproducts(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <MyContainer>
      <div>
        <title> Products -all Import Export Hub</title>
        <div className="text-center text-3xl font-bold pb-6">All Products</div>
        <form
          onSubmit={handlesearch}
          className="flex items-center justify-center gap-5 mb-8 "
        >
          <label className="input border  rounded-full w-1xl ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          {/* <div> */}
          <button className="btn btn-secondary rounded-full ">Search</button>
          {/* </div> */}
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-5">
          {loading ? (
            <p className=" grid grid-cols-12 text-center text-2xl bg-amber-300">
              loading...
            </p>
          ) : (
            products.map((data) => <Main key={data._id} data={data}></Main>)
          )}
        </div>
      </div>
    </MyContainer>
  );
};

export default AllProducts;
