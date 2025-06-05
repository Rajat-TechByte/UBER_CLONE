import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    })
    console.log(captainData);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className="w-14 ml-8 mt-8"
          src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/16-uber_car_driver-512.png"
        />
        <form onSubmit={(e) => {
          submitHandler(e);
        }} className="p-7">
          <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
            required
          />

          <h3 className="text-lg font-medium  mb-2">Enter Password</h3>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="password"
            required
          />

          <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </form>
      </div>

      <div>
        <Link
          to = '/login'
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold  mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as User 
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
