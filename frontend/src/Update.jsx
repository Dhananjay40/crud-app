import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Update = () => {

    const[id, setId] = useState(0);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");  

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])


    const navigate = useNavigate();
  
    const handleUpdate = (e)=>{
      e.preventDefault();
      console.log("hello")
        axios.put(
          `https://64ef4f79219b3e2873c44b97.mockapi.io/database/${id}`,
          {
            name: name,     
            email: email,
          }
        )
        handleShow()

    }


    const handleShow = ()=>{
        navigate("/read")
      } 

  return (
    <div className='flex flex-col items-center  '>
        <h1 className="mt-20 text-2xl font-bold">Update Details</h1>
        <div className='flex flex-col w-[400px]'>
            <input type="text" className="mt-5 text-lg p-1 px-3 rounded" value={name}
            placeholder="Name" onChange={(e)=>setName(e.target.value)} />

            <input type="text" className="mt-5 text-lg p-1 px-3 rounded" value={email}
            placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button className="w-[200px] bg-green-600 text-lg rounded mt-5 p-1"
            onClick={handleUpdate} >
            Update
        </button>   
    </div>
  )
}

export default Update