"use client";

import React, { useState } from "react";
import axios from 'axios' //npm install axios https://www.npmjs.com/package/axios

const CreateUserPage = () => {
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        age: ""
    });

    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        console.log(userField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
          const responce= await axios.post("http://localhost:3000/create", userField);
          console.log(responce)
          window.location.href = '/';
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    
    return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add New User</h1>
        <div>
        <form>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Full Name..."
            onChange={e => changeUserFieldHandler(e)} 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Email..."
            onChange={e => changeUserFieldHandler(e)} 
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="age" className="block text-sm font-medium text-gray-900">
            Age
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Age..."
            onChange={e => changeUserFieldHandler(e)} 
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add User</button> 
      </form>
    </div>
    </div>
  );
};
  
export default CreateUserPage;