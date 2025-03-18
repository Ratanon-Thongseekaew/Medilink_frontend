import { ChevronDown, Edit, Trash } from 'lucide-react';
import React from 'react'

function UserProfile() {
    return (
        <div className="p-4 ml-50">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="flex items-center mb-4">
                <img
                    src="https://via.placeholder.com/150"
                    alt="User"
                    className="rounded-full w-20 h-20 mr-4"
                />
                <div className="flex-1 min-w-0">
                    <p className="text-xl whitespace-nowrap">นางสาว สวัสดี สีชมพู</p>
                    <p className="text-gray-500 whitespace-nowrap">Pateint</p>
                    <p className="text-gray-500 whitespace-nowrap">BKK, Thailand</p>
                </div>
                <div className="ml-auto flex">
                    <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-320">
                        <p>Edit</p>
                        <ChevronDown className='w-4 ml-2 ' />
                    </div>
                </div>
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
                        <input
                            type="text"
                            placeholder="Gender"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
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
                        <input
                            type="text"
                            placeholder="Blood Group"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
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
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-bold mb-2">Medical History</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="border p-2 rounded-md text-center">
                        <p>Package 1</p>
                        <span>None</span>
                    </div>
                    <div className="border p-2 rounded-md text-center">
                        <p>Package 2</p>
                        <span>None</span>
                    </div>
                    <div className="border p-2 rounded-md text-center">
                        <p>Package 3</p>
                        <span>None</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile