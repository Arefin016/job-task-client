import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email or Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="email or number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PIN</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-2 font-medium">
              <small>
                New Here?{" "}
                <Link className="text-blue-600" to={"/signup"}>
                  Create an account
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
