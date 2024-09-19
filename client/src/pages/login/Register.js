import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import SocialLogin from "../../shared/SocialLogin";

const Register = () => {
  const [createEmailUser, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [token] = useToken(user); 
  // submit process ................
  
  const onSubmit = async (data) => {
    if (data.password !== data.confirmPass){
     toast.error('Passoword doesn\'t mach!')
    }else{
      await createEmailUser(data.email, data.password);
      await updateProfile({displayName: data.name})
    }
  };

  if(error || updateError ) {
    toast.error(error?.message || updateError?.message);
  }

useEffect(()=> {
  if(token && !updating) {
    navigate("/dashboard");
  }
}, [token, navigate, updating])

  let spinner = "";
  if (loading || updating) {
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
      <h2 className="text-3xl text-center font-bold mt-4">
        Register
      </h2>
      <div className="flex flex-col w-full max-w-lg mx-auto border-opacity-50 mt-12">
        <div className="grid p-12 card bg-gray-600/50 shadow-lg  place-items-center border-t-2 border-t-primary">
          {/* react hook form  */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 w-full">
            <label className="label">
              <span className="label-text">Your Name</span>
              <span className="label-text-alt text-red-400 text-sm">
              {errors.name && "Name is Required *"}
              </span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Your Email</span>
              <span className="label-text-alt text-red-400 text-sm">
                {" "}
                {errors.email && "Email is Required *"}
              </span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full max-w-md"
            />

            <label className="label">
              <span className="label-text">Password</span>
              <span className="label-text-alt text-red-400 text-sm">
                {errors.password && 'password is required *'}
              </span>
            </label>
            <input
              {...register("password", { required: true })}
              placeholder="Passoword"
              type="password"
              autoComplete="Off"
              className="input input-bordered w-full max-w-md"
            />
            <label className="label">
              <span className="label-text">Confirm Password</span>
              <span className="label-text-alt text-red-400 text-sm">
                {errors.confirmPass && "ConfirmPass is Required *"}
              </span>
            </label>
            <input
              {...register("confirmPass", { required: true })}
              placeholder="Confirm Passoword"
              type="password"
              className="input input-bordered w-full max-w-md"
            />
            <label className="label mt-4 mb-8">
              <span className="label-text">
                Already have an account?{" "}
                <Link className="link link-primary" to="/login">
                  Login
                </Link>
              </span>
            </label>
            <button className="btn btn-primary w-full">
              {spinner} Register
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

export default Register;
