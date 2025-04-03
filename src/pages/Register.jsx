import React, { useContext } from "react";
import Lottie from "lottie-react";
import registerAnimate from "../assets/register.json";
import AuthContext from "../context/authcontext/AuthContext";
import SharedAuth from "./shared/SharedAuth";

export default function Register() {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-90">
            <Lottie animationData={registerAnimate} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl font-bold mx-4 my-2">Register now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <SharedAuth></SharedAuth>
          </div>
        </div>
      </div>
    </div>
  );
}
