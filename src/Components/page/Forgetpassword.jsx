import React from "react";
import MyContainer from "../Layout/MyContainer";
import { Link } from "react-router";

const Forgetpassword = () => {
  return (
    <MyContainer>
      <div className="text-center text-2xl font-bold ">
        <h1>forget password</h1>
      </div>
      <div className="bg-orange-100 rounded-md w-1/2 mx-auto p-5 m-5 space-y-5">
        <form
          // onSubmit={handleSignup}
          className="card-body "
        >
          <fieldset className="flex flex-col justify-center   gap-4">
            {/* name */}
            <label className="text-2xl font-bold">
              {/* name : {user && user.name} */}
            </label>
            <input type="text" className="border" name="name" id="" required />{" "}
            {/* email */}
            <label className="text-2xl font-bold">email</label>
            <input
              className="border"
              type="email"
              name="email"
              id=""
              required
            />
            {/* photourl */}
            <label className="text-2xl font-bold">photourl</label>
            <input
              type="text"
              name="photourl"
              className="border"
              id=""
              required
            />{" "}
            {/* password */}
            <label className="text-2xl font-bold">New password</label>
            <input
              className="border"
              type="password"
              name="password"
              id=""
              required
            />{" "}
            {/* {passwordError && ( */}
            <p className="text-xs  text-red-400 ">{/* {passwordError} */}</p>
            {/* ) */}
            {/* } */}
            <div className="flex flex-col justify-center  items-center">
              {/* <NavLink to="/">
              <buton>FORGET PASSWORD</buton>
            </NavLink> */}
              <button
                type="submit"
                className="p-2 bg-orange-400 text-white w-full rounded-md my-3"
              >
                Signup
              </button>
              {/* <span>or</span> */}
              {/* <div className="flex gap-5 ">
                <button
                  //   onClick={handleSigninWithGoogle}
                  type="submit"
                  className="p-2 px-5 bg-white w-full rounded-md my-3"
                >
                  Google Signup
                </button> */}
              {/* <button
                  type="submit"
                  className="p-2 px-5 bg-white w-full rounded-md my-3"
                  >
                  facebook
                  </button> */}
              {/* </div> */}
              {/* <div>
                already have a account
                <Link
                  to="/login"
                  className="p-2 px-5 bg-white w-full rounded-md my-3 mx-5"
                >
                  loging
                </Link>
              </div> */}
            </div>
          </fieldset>
        </form>
      </div>
    </MyContainer>
  );
};

export default Forgetpassword;
