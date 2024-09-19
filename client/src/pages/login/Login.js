import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import SocialLogin from '../../shared/SocialLogin';

const Login = () => {
    const [
        emailLogin,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [token] = useToken(user )
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/dashboard";

  const onSubmit = data => {
      emailLogin(data.email, data.password)
    };
    if(error) toast.error(error.message);
  useEffect(()=>{
    if(token && !loading){
        navigate(from, { replace: true });
    }
  },[token,loading, from, navigate]);
  let spinner = "";
  if (loading) {
    spinner = (
      <div className=" flex items-center justify-center w-12 h-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="0"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              values="0;40"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="0s"
            ></animate>
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="1s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="0s"
            ></animate>
          </circle>
          <circle
            cx="50"
            cy="50"
            r="0"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="1s"
              values="0;40"
              keyTimes="0;1"
              keySplines="0 0.2 0.8 1"
              calcMode="spline"
              begin="-0.5s"
            ></animate>
            <animate
              attributeName="opacity"
              repeatCount="indefinite"
              dur="1s"
              values="1;0"
              keyTimes="0;1"
              keySplines="0.2 0 0.8 1"
              calcMode="spline"
              begin="-0.5s"
            ></animate>
          </circle>
        </svg>
      </div>
    );
  }
    return (
      <div className="px-2">
        <h2 className="text-3xl text-center mt-4 font-bold ">Login </h2>
        <div className="flex flex-col w-full max-w-lg mx-auto border-opacity-50 mt-12">
          <div className="grid p-12 card bg-gray-600/50 shadow-lg  place-items-center border-t-2 border-t-primary">
            {/* react hook form  */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-2 w-full"
            >
              <label className="label">
                <span className="label-text">Your Email</span>
                <span className="label-text-alt text-red-400 text-sm">
                  {" "}
                  {errors.email && "Email is Required *"}
                </span>
              </label>
              <input
                {...register("email", { required: true })}
                autoComplete="Off"
                placeholder="User email"
                defaultValue="bangladesh@gmail.com"
                className="input input-bordered w-full max-w-md"
              />

              <label className="label">
                <span className="label-text">Your Password</span>
                <span className="label-text-alt text-red-400 text-sm">
                  {" "}
                  {errors.password && "Password is Required *"}
                </span>
              </label>
              <input
                {...register("password", { required: true })}
                placeholder="Passoword"
                type="password"
                defaultValue="bangladesh"
                className="input input-bordered w-full max-w-md"
              />
              <label className="label mt-4 mb-8">
                <span className="label-text">
                  Don't have an account?{" "}
                  <Link className="link link-primary" to="/register">
                    Register
                  </Link>
                </span>
                <span className="label-text">
                  Forgot Password?{" "}
                  <Link className="link link-primary" to="/reset">
                    Reset
                  </Link>
                </span>
              </label>
              <button value="Login" className="btn btn-primary w-full">
                {loading && spinner} Login{" "}
              </button>
            </form>
          </div>
          <div className="divider">Or, continue with</div>
          <div className="grid h-28 card bg-blue-400 rounded-box place-items-center">
            <SocialLogin />
          </div>
        </div>
      </div>
    );
};

export default Login;