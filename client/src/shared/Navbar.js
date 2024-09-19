import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState} from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
const navigate = useNavigate();
  // console.log(user);
  const menuItems = (
    <>
      <li >
        <Link className="active:bg-accent" to="/">Home</Link>
      </li>
      <li >
        <Link className="active:bg-accent" to="/products">All Products</Link>
      </li>
      <li >
        <Link className="active:bg-accent" to="/blog">Blog</Link>
      </li>
      <li >
        <Link className="active:bg-accent" to="/portfolio">Me</Link>
      </li>
    </>
  );
  const profileItems = (
    <>
      <li>
        <Link to="/dashboard/user-profile">{user?.displayName? user.displayName : 'Unknown User'}</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <button onClick={()=>{
          signOut(auth);
          localStorage.removeItem('access_token');
          navigate('/login')
        }}>Log Out</button>
      </li>
    </>
  );
  return (

    <div className="sticky top-0 z-40 shadow backdrop-blur-md backdrop-hue-rotate-30 dark:bg-accent dark:text-white bg-[#ffffffc4]">
      <div className="navbar container mx-auto">
        {/* Mobile DropDown menu  */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="text-2xl font-bold" to="/">SSG <span className="hidden md:inline-block">Corporation</span></Link>
        </div>
        {/* Desktop menu  */}
        {/* <div className="navbar navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div> */}
        <div className="navbar navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          {!user ? <button disabled={loading} onClick={()=> navigate('/login')} className="btn btn-ghost" to="/login">Login</button> : 
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL? user?.photoURL: 'https://api.lorem.space/image/face?hash=33791'}
                  alt="photoURL"
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {profileItems}
            </ul>
          </div>} 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
