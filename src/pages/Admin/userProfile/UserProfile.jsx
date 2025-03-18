import { ChevronDown, PencilIcon, UserPen,} from 'lucide-react';
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
                    <UserPen className='w-8 h-8 text-amber-500'/>
                </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <div className="flex">
                    <h2 className="text-lg font-bold mb-2">Personal Information</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Name</p>
                        <p>นางสาว สวัสดี สีชมพู</p>
                    </div>
                    <div>
                        <p>Date Of Birth</p>
                        <p>14/2/2000</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p>Female</p>
                    </div>
                    <div>
                        <p>Age</p>
                        <p>25</p>
                    </div>
                    <div>
                        <p>Blood Group</p>
                        <p>A negative</p>
                    </div>
                    <div>
                        <p>Bio</p>
                        <p>Personal Information</p>
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