import React, { useContext } from "react";
import AuthContext from "../../context/authcontext/AuthContext";

export default function SharedAuth() {
  const { sininWithGoogle } = useContext(AuthContext);
  const handleGoogle = () => {
    sininWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div
        onClick={handleGoogle}
        className="btn flex justify-center items-center"
      >
        Google
      </div>
    </div>
  );
}
