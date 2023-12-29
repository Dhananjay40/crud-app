import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import React from 'react'

const Edit = () => {

  const[name, setName] = useState(localStorage.getItem('name'));
  const[email, setEmail] = useState(localStorage.getItem('email'));

  const header = {"Access-Control-Allow-Origin": "*"}

  const handleSubmit = async (e)=>{
    console.log("Add clicked")
    e.preventDefault();
    try {
      if(name!=""&&email!=""){
        await axios.put(
          `http://localhost:5000/api/users/${localStorage.getItem('id')}`,{ name, email, }
        );
        console.log("done")
      }   
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }


  return (
    <div className='flex flex-col items-center  '>
        <h1 className="mt-20 text-2xl font-bold">Edit user's details</h1>
        <div className='flex flex-col w-[400px]'>
            <input type="text" className="mt-5 text-lg p-1 px-3 rounded" value={name}
            onChange={(e)=>setName(e.target.value)} />

            <input type="text" className="mt-5 text-lg p-1 px-3 rounded" value={email}
            onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button className="w-[200px] bg-green-600 text-lg rounded mt-5 p-1" onClick={handleSubmit}>
            Edit
        </button>
        
        <Link to="/read" className="flex justify-center w-[200px] bg-blue-600 text-lg rounded mt-24 p-1" >
            <h1 className="">Show Data</h1>
        </Link>
    </div>
  )
}

export default Edit