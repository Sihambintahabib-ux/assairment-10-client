// import React, { use } from 'react';
import { use, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import MyContainer from "../Layout/MyContainer";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  // const { createUser_Email, setuser,  } = use(AuthContext);

  const { signin, setuser, signinwithGoogle } = use(AuthContext);
  const { user } = use(AuthContext);
  const location = useLocation();
  // const from = location.state || "/";
  const navigate = useNavigate();
  //*google login :
  const handleloginWithGoogle = (e) => {
    e.preventDefault();
    signinwithGoogle()
      .then((res) => {
        console.log(res);
        setuser(res.user);
      })
      .catch((err) => {
        console.log(err);
        toast.err(e.message);
      });
    console.log("hello");
  };
  //*password login :
  const handleloging = (e) => {
    e.preventDefault();
    console.log("handleloging");
    // const displayName = e.target.name?.value;
    // const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log(e.target);
    console.log("sign up done", { email, password });
    signin(email, password)
      .then(() => {
        // Signed in
        // const user = res.user;
        toast.success("Signed in successful.");
        //  navigate(`${location.state ? location.state : "/"}`);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error("error happened!  Sign-in incomplete", errorCode);
        setError(errorCode); // console.log({ errorCode, errorMessage });
      });
  };

  if (user) {
    navigate("/");
    // navigate(`${location.state ? location.state : "/"}`);
    return;
  }
  //
  return (
    <MyContainer>
      <title> Products -login</title>

      <div className="text-center text-2xl font-bold ">
        <h1>Loging</h1>
      </div>
      <div className="bg-gray-100 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2  mx-auto rounded-md p-5 m-5 space-y-5">
        <form onSubmit={handleloging} className="card-body">
          <fieldset className="flex flex-col justify-center   gap-4">
            {/* email */}
            <label className="text-2xl font-bold">Email</label>
            <input
              className="border p-2 "
              type="email"
              name="email"
              required
              id=""
            />
            {/* password */}
            <label className="text-2xl font-bold">Password</label>
            <input
              className="border p-2 "
              type="password"
              name="password"
              id=""
              required
            />{" "}
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <div className="flex flex-col justify-center  items-center">
              <NavLink to="/forgetpassword">
                <button className="link link-hover text-blue-800">
                  FORGET PASSWORD
                </button>
              </NavLink>
              <button
                className="p-2 bg-black text-white w-full rounded-md my-3"
                type="submit"
              >
                Loging
              </button>
              <span>or</span>
              <div className="flex gap-5 ">
                <button
                  onClick={handleloginWithGoogle}
                  type="submit"
                  className="p-2 px-5 bg-white w-full rounded-md my-3"
                >
                  Google Loging
                </button>
              </div>
              <div className="flex flex-row  justify-between w-full items-center text-center flex-wrap ">
                <p className=" "> Dont have a Account ?</p>
                <Link
                  to="/signup"
                  className="p-2 px-5 bg-white rounded-md w-full my-3 mx-5"
                >
                  Signup
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </MyContainer>
  );
};

export default Login;
