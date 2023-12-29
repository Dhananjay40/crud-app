import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Read = () => {

  const[data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  },[data])

  //pulling data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  //deleting user
  const handleDeleteUser = async (userId) =>{
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);

    } catch (error) {
      console.log('Error in deleting the user', error.message)
    }
  }

  const navigate1 = useNavigate();

  const handleEdit = ()=>{
    Link
  }
  const setToLocalStorage = (id, name, email)=>{
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-20">
          <div className="inline-block w-[1200px] py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light bg-slate-700">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">ID</th>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Email</th>
                    <th scope="col" className=""></th>
                    <th scope="col" className=""></th>
                  </tr> 
                </thead>
                <tbody>
                  {data.map((d)=>{
                    return (
                      <tr className="border-b dark:border-neutral-500" key={d._id}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{d.id}</td>
                        <td className="whitespace-nowrap px-6 py-4" >{d.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{d.email}</td>

                        <td className="whitespace-nowrap">
                          <Link to="/edit" className='bg-green-600 p-1 px-4 rounded-md w-16 font-bold' onClick={()=>{setToLocalStorage(d._id,d.name, d.email),handleEdit()}} >
                            Edit
                          </Link>
                        </td>

                        <td className="whitespace-nowrap">
                          <button className='bg-red-600 p-1 rounded-md w-16 font-bold' onClick={()=>handleDeleteUser(d._id)}>
                              Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>  
              </table>

              <Link to="/create" className='w-36 bg-blue-800 flex justify-center p-2 rounded-lg m-10 mx-auto'>
                Add New Entry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Read