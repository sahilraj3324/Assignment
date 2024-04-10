import React, { useState } from "react";
import Side from '../assets/sideimg.jpg'
import logo from '../assets/icon.svg'
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"


const LoginPage = ({ id, label, onChange }) => {

  const nav = useNavigate();
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("account@refero.design");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div className='w-full h-screen flex items-start '>
      <div className="relative w-[40%] h-full flex flex-col">
       
        <div className="absolute top-[8%] left-[10%] right-[10%] flex flex-col"> 
        <div>
        <a href="/" className='text-xl font-semibold flex items-center space-x-3 text-black mb-20'>
                <img src={logo} alt="" className='w-10 inline-block items-center'/>
                <span className="text-white" >AniWorld </span>
            </a>
        </div>
        
            <h1 className='text-4xl text-white font-bold my-4' > turn your ideas into relaty Start for free and get offer</h1>
            <p className='text-xl text-white font-normal '>Start for free and get offer</p>
        </div>
        <img src={Side} className='w-full h-full object-cover' alt="" />
      </div>

      <div className="w-[60%] h-full bg-white flex flex-col p-20 justify-between">
         <div className="container mx-auto ">
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className="text-4xl text-cen font-bold mb-8 mt-2">Sign Up to Dribbble</h1>
        <div className="mb-7 mt-20 ">
         <div className="flex space-x-40 ">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2 ">
           UserName
          </label>
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2 ">
            Name
          </label>
         </div>
          <div className="flex space-x-4">
          <input type="text" id="username"
           className="appearance-none bg-[#f5f5f5]  rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input type="text" id="username"  className="appearance-none bg-[#f5f5f5] rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>
        </div>
        <div className="mb-7">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email" id="email" onChange={(e) => setEmail(e.target.value)} 
            required className="appearance-none bg-[#f5f5f5] rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password ()
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            placeholder="6+ characters"
            required
            className="appearance-none bg-[#f5f5f5] rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-8 text flex mb-10">
       
        <input
        type="checkbox"
        id={id}
        className=" h-10 w-10 "
        onChange={onChange}
      />
      
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
      <p className="text-gray-700 font-semibold">
        Creating an account means you're okay with our{" "}
        <a href="/terms" className="text-first" target="_blank">
          Terms of Service
        </a>
        ,{" "}
        <a href="/privacy" className="text-first" target="_blank">
          Privacy Policy
        </a>
        , and our default{" "}
        <a href="/notifications" className="text-first" target="_blank">
          Notification Settings
        </a>
        .
      </p>
    </div>
   
        <button
          type="submit"
          onClick={()=>{
            nav("/create")
          }}
          className="bg-first hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-md focus:outline-none focus:shadow-outline "
        >
          
          Create Account
        </button>
        <div className="mt-4">
        <p className="text-gray-700 font-semibold">
        Creating an account means you're okay with our{" "}
        <a href="/terms" className="text-first" target="_blank">
          Terms of Service
        </a>
        ,{" "}
        <a href="/privacy" className="text-blue-500" target="_blank">
          Privacy Policy
        </a>
        , and our default{" "}
        <a href="/notifications" className="text-first" target="_blank">
          Notification Settings
        </a>
        .
      </p>
      </div>
      </form>
      
    </div>
      </div>
    </div>
  )
}

export default LoginPage
