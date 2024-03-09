import React, { useEffect, useState } from 'react'
import { useRegisterMutation } from '../../redux/api/userapiSlice';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from '../../redux/feautare/auth/authSlice';
import { toast } from "react-toastify";

export const Registar = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");




  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  console.log(userInfo)

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error('Please Some confirm | pssword')

    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
         toast.succes("Created new User ")
         navigate("/login")
        
       console.log(res)

      
      } catch (err) {
        console.log(err);
   
      }
    }
  };

  return (
    <div className="pl-[10rem] flex flex-wrap">
    <div className="mr-[4rem] mt-[5rem]">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>

      <form  onSubmit={submitHandler} className="container w-[40rem]">
        <div className="my-[2rem]">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="my-[2rem]">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-[2rem]">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-[2rem]">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 p-2 border rounded w-full"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

       
      </form>

   
    </div>
    
  </div>
);
  
}
