import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import React from 'react'

const Create = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");

  const header = {"Access-Control-Allow-Origin": "*"}

  const handleSubmit = async (e)=>{
    console.log("Add clicked")
    e.preventDefault();
    try {
      if(name!=""&&email!=""){

        await axios.post(
          'http://localhost:5000/api/users',{ name, email, }
        );
        setName('');
        setEmail('');
        console.log("done")
      }   
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }


  return (
    <div className='flex flex-col items-center  '>
        <h1 className="mt-20 text-2xl font-bold">Enter New Details</h1>
        <div className='flex flex-col w-[400px]'>
            <input type="text" className="mt-5 text-lg p-1 px-3 rounded" placeholder="Name"
            onChange={(e)=>setName(e.target.value)} />

            <input type="text" className="mt-5 text-lg p-1 px-3 rounded" placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button className="w-[200px] bg-green-600 text-lg rounded mt-5 p-1" onClick={handleSubmit}>
            Add
        </button>
        {/* <button className="w-[200px] bg-blue-600 text-lg rounded mt-24 p-1" onClick={handleShow} >
            Show Data
        </button> */}
        <Link to="/read" className="flex justify-center w-[200px] bg-blue-600 text-lg rounded mt-24 p-1" >
            <h1 className="">Show Data</h1>
        </Link>
    </div>
  )
}

export default Create