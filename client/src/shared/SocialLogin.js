import React, { useEffect } from "react";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import gicon from '../images/icons/google-fill.svg';
import fbicon from '../images/icons/facebook-circle-fill.svg';
import giticon from '../images/icons/github-fill.svg';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../hooks/useToken";


const SocialLogin = () => {
    const [google, user, error] = useSignInWithGoogle(auth);
    const [github, gitUser, gitError] = useSignInWithGithub(auth);
    const [fb, fUser, fError] = useSignInWithFacebook(auth);
    const [token] = useToken(user|| gitUser|| fUser)
    const navigate = useNavigate(); 
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";
 if(error|| gitError || fError) {
  toast.error(error?.message|| gitError?.message || fError?.message);
 }
   useEffect(()=>{
    if(token || gitUser){
      navigate(from, { replace: true });
  } 
   }, [token, gitUser, from , navigate]);
  return (
    <div className="flex gap-4 justify-around">
      <button onClick={()=> google()} className="px-8 py-2 rounded-full bg-gray-900/50 hover:bg-blue-600/50 border-1 border-white"><img src={gicon} alt="" /></button>
      <button onClick={()=> github()} disabled data-tip="Disabled" className="tooltip px-8 py-2 rounded-full bg-gray-900/50 hover:bg-blue-600/50 border-1 border-white"><img src={giticon} alt="" /></button>
      <button onClick={()=> fb()} disabled data-tip="Disabled" className="tooltip px-8 py-2 rounded-full bg-gray-900/50 hover:bg-blue-600/50 border-1 border-white"><img src={fbicon} alt="" /></button>
    </div>
  );
};

export default SocialLogin;
