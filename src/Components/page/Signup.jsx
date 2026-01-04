import React, { use, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Context/AuthContext";
import MyContainer from "../Layout/MyContainer";
import { auth } from "../../Firebase/Firebase.config";
import { imageUpload, saveOrUpdateUser } from "./Utility";
import { FaGoogle, FaUser, FaLock, FaEnvelope, FaImage } from "react-icons/fa";

const Signup = () => {
  const [passwordError, setpasswordError] = useState("");
  const { createUser_Email, setuser, signinwithGoogle, user } =
    use(AuthContext);
  const navigate = useNavigate();

  const handleSigninWithGoogle = (e) => {
    e.preventDefault();
    signinwithGoogle()
      .then((res) => {
        setuser(res.user);
        const newuser = {
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          role: "member",
        };
        fetch(`${import.meta.env.VITE_API_URL}/user`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newuser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data, "user after save"));
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoFile = e.target.photourl?.files[0];
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    // Password validation
    if (password.length < 6) {
      setpasswordError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setpasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setpasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setpasswordError("");
    }

    // Upload image
    let photoURL = "";
    if (photoFile) {
      photoURL = await imageUpload(photoFile);
      console.log("Image uploaded:", photoURL);
    }

    createUser_Email(email, password)
      .then((res) => {
        console.log("res----", res);
        const newuser = {
          displayName: displayName,
          email: res.user.email,
          photoURL: photoURL,
          role: "member",
        };

        console.log(import.meta.env.VITE_API_URL);
        fetch(`${import.meta.env.VITE_API_URL}/user`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newuser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data, "user after save"))
          .catch((err) => {
            console.log(err);
          });

        const user = res.user;
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
          role: "member",
        })
          .then(() => {
            setuser({
              ...user,
              displayName: displayName,
              photoURL: photoURL,
              role: "member",
            });
          })
          .catch((error) => {
            console.log(error);
            setuser(user);
          });

        console.log("gdgdg", res);
        toast.success("Signup successful");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <MyContainer>
      <title>Products - Signup</title>

      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">Join ImportHub today</p>
          </div>

          {/* Signup Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSignup} className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profile Photo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <FaImage className="text-gray-400" />
                  </div>
                  <input
                    type="file"
                    name="photourl"
                    required
                    accept="image/*"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    placeholder="Create a strong password"
                  />
                </div>
                {/* Password Requirements */}
                <div className="mt-2 text-xs text-gray-500 space-y-1">
                  <p>Password must contain:</p>
                  <ul className="list-disc list-inside ml-2 space-y-0.5">
                    <li>At least 6 characters</li>
                    <li>One uppercase letter</li>
                    <li>One lowercase letter</li>
                  </ul>
                </div>
              </div>

              {/* Error Message */}
              {passwordError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {passwordError}
                </div>
              )}

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transform transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm font-medium">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Google Signup Button */}
              <button
                onClick={handleSigninWithGoogle}
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition"
              >
                <FaGoogle className="text-red-500 text-lg" />
                Sign up with Google
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              By signing up, you agree to our{" "}
              <a href="#" className="text-orange-600 hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-orange-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Signup;
