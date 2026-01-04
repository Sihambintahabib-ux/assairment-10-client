import { use, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import MyContainer from "../Layout/MyContainer";
import { AuthContext } from "../../Context/AuthContext";
import { FaGoogle, FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signin, setuser, signinwithGoogle, user } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const DEMO_CREDENTIALS = {
    email: "abc@gmail.com",
    password: "abc@gmail.com",
  };

  const handleDemouser = (e) => {
    e.preventDefault();
    document.querySelector('input[name="email"]').value =
      DEMO_CREDENTIALS.email;
    document.querySelector('input[name="password"]').value =
      DEMO_CREDENTIALS.password;
    signin(DEMO_CREDENTIALS.email, DEMO_CREDENTIALS.password);
  };

  const handleloginWithGoogle = (e) => {
    e.preventDefault();
    signinwithGoogle()
      .then((res) => {
        console.log(res);
        setuser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleloging = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signin(email, password)
      .then(() => {
        toast.success("Signed in successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error("Sign-in failed: " + errorCode);
        setError(errorCode);
      });
  };

  return (
    <MyContainer>
      <title>Products - Login</title>

      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to continue to ImportHub</p>
          </div>

          {/* Demo User Info Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  Try Demo Account
                </h3>
                <div className="text-xs text-blue-700 space-y-0.5">
                  <p className="font-medium">Email: {DEMO_CREDENTIALS.email}</p>
                  <p className="font-medium">
                    Password: {DEMO_CREDENTIALS.password}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleloging} className="space-y-6">
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your email"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <NavLink
                  to="/forgetpassword"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot Password?
                </NavLink>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-900 text-white font-semibold py-3 rounded-lg hover:from-red-900 hover:to-orange-600 transform transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm font-medium">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Alternative Login Buttons */}
              <div className="space-y-3">
                {/* Google Login */}
                <button
                  onClick={handleloginWithGoogle}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition"
                >
                  <FaGoogle className="text-red-500 text-lg" />
                  Continue with Google
                </button>

                {/* Demo User Button */}
                <button
                  onClick={handleDemouser}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transform transition hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaUser className="text-lg" />
                  Try Demo Account
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              By signing in, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Login;
