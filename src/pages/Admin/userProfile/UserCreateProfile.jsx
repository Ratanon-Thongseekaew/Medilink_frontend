import React, { useState } from 'react'
import useUserStore from '../../../stores/userStore'
import { useParams } from 'react-router'


function UserCreateProfile() {
    // const token =useUserStore((state)=> state.token)
    // const {UserId} =useParams
    // const [input, setInput]=useState({
    //     email : "",
    //     password : "",
    //     firstname : "",
    //     lastname : "",
    //     phone : "",
    //     address : "",
    //     role : USER,
    //     profileImg: null, 
    // })

    // const hdlChange = (e) =>{
    //     const { name, value } = e.target
    //     setInput({...input, [name] : value})
    // }

    // const hdlFileChange = (e) =>{
    //     setInput({...input, profileImg : e.target.file[0]})
    // }
    // const hdlSubmit = async (e) =>{
    //     e.preventDefault()
    //     try {
    //         const res = await axios.post('http://localhost:8888/admin/user-create-profile')

    //     } catch (error) {
    //         console.log("adminCreateUser",error)
    //     }
    // }

    return (
        <div className="p-4 ml-50">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {/* <form onSubmit={hdlSubmit}> */}
            <div className="flex items-center mb-4">
                <img
                    src="https://via.placeholder.com/150"
                    alt="User"
                    className="rounded-full w-20 h-20 mr-4"
                />
            </div>
            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <div className="flex">
                    <h2 className="text-lg font-bold mb-2">Personal Information</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Name</p>
                        <input
                            type="text"
                            placeholder="Name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <p>Date Of Birth</p>
                        <input
                            type="date"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <p>Gender</p>
                        <select className="border rounded-md p-2 w-60 text-gray-500">
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>
                    <div>
                        <p>Age</p>
                        <input
                            type="text"
                            placeholder="Age"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <p>Blood Group</p>
                        <select className="border rounded-md p-2 w-60 text-gray-500">
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="1">A positive (A+)</option>
                            <option value="2">A negative (A-)</option>
                            <option value="2">B negative (B+)</option>
                            <option value="2">B negative (B-)</option>
                            <option value="2">AB negative (AB+)</option>
                            <option value="2">AB negative (AB-)</option>
                            <option value="2">O negative (O+)</option>
                            <option value="2">O negative (O-)</option>
                        </select>
                    </div>
                    <div>
                        <p>Bio</p>
                        <input
                            type="text"
                            placeholder="Personal Information"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='border  bg-amber-500 w-30 h-10 rounded-md text-white'>Submit</button>
            </div>
            {/* </form> */}
        </div>
    );
};

export default UserCreateProfile