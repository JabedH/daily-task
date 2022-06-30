import React from "react";
import google from "../../assets/icon/google.svg";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const handleSigning = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  if (user || user1) {
    navigate(from, { replace: true });
  }
  return (
    <div className="">
      <div class=" hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <div class="card flex-shrink-0 w-96 p-3  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSigning} action="">
              <div class="form-control ">
                <h3 className="text-2xl">Login</h3>
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  class="input input-bordered mb-3"
                />
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                  <a href="#" class="label-text-alt link link-hover">
                    <Link to="/Signup">Haven't any Account</Link>
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
              <div class="flex flex-col w-full">
                <div class="divider">Or</div>
                <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
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
  );
};

export default Login;
