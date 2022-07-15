import React from "react";
import google from "../../assets/icon/google.svg";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import "./log.css";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const handleSigning = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    fetch("https://quiet-mountain-32735.herokuapp.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("accessToken", data.accessToken);
        }
        console.log(data);
      });
  };
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  if (user || user1) {
    navigate(from, { replace: true });
  }
  return (
    <div className="h-screen">
      <div className="m-5 my-10 ">
        <div className="flex justify-center items-center">
          <div className="w-96 lg:flex-row-reverse">
            <div className=" card flex-shrink-0 shadow-2xl bg-base-100 ">
              <div className="card-body ">
                <form onSubmit={handleSigning} action="">
                  <div className="form-control ">
                    <h3 className="text-2xl">Login</h3>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered mb-3"
                    />
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                      <a href="#" className="label-text-alt link link-hover">
                        <Link to="/Signup">Haven't any Account</Link>
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="divider">Or</div>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                      <button onClick={() => signInWithGoogle()}>
                        <img src={google}></img>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
