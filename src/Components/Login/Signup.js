import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/icon/google.svg";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSiGnup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="h-screen">
      <div className="m-5 my-10 ">
        <div className="flex justify-center items-center ">
          <div className=" w-96 lg:flex-row-reverse">
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 ">
              <div className="card-body">
                <form onSubmit={handleSiGnup} action="">
                  <div className="form-control ">
                    <h3 className="text-2xl">Sign Up</h3>
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="name"
                      className="input input-bordered mb-3"
                    />
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
                        <Link to="/login">Already have an Account?</Link>
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
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

export default SignUp;
