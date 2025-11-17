import React, { useEffect, useState } from "react";
// import  { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  //   getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import { auth } from "../firebase.config";
// import app from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.config";
// export const AuthContext = createContext();

// const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  //   console.log(auth, loading);
  // CREATE ACCOUNT WITH PASSWORD
  const createUser_Email = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // LOGOUT ACCOUNT WITH CLICK
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful.");
      })
      .catch(() => {
        // An error happened.
        toast.error("error happened!  Sign-out incomplete");
      });
  };
  // SIGNIN ACCOUNT WITH PASSWORD
  // const navigate = useNavigate();
  const signin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SIGNIN ACCOUNT WITH GOOGLE
  const signinwithGoogle = (email, password) => {
    setloading(true);
    return signInWithPopup(auth, provider);
  }; // UPDATA PROFIEL
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //user state observe :
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setuser(currentUser);
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setuser,
    createUser_Email,
    logout,
    signin,
    signinwithGoogle,
    loading,
    setloading,
    updateUser,
  };

  return (
    // <div>
    // <AuthProvider value={authData}>{children}</AuthProvider>
    // <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    <AuthContext value={authData}>{children}</AuthContext>
    // </div>
  );
};

export default AuthProvider;
