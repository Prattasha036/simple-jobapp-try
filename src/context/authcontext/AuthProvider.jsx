import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sininWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   user state e dore rakhar jonne
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //info
  const authInfo = {
    user,
    loading,
    createUser,
    signUser,
    signOutUser,
    sininWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
