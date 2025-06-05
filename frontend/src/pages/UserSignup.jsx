import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstname,
        lastname,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstname('');
    setLastname('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-14 ml-8 mt-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="p-7"
        >
          
          <h3 className="text-base font-medium mb-2">What's your name ?</h3>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              className=" w-1/2 bg-[#eeeeee]  rounded px-4 py-2 border text-lg placeholder:text-base"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
            />
            <input
              type="text"
              className="w-1/2 bg-[#eeeeee]  rounded px-4 py-2 border text-lg placeholder:text-base"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              required
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
          <input
            type="email"
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <h3 className="text-lg font-medium  mb-2">Enter Password</h3>

          <input
            type="password"
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you get concent to get calls, Whatsapp or SMS messsages, including by automated means, from Uber 
          and its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
