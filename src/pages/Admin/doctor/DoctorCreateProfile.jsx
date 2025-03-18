import { ChevronDown, Clock, HospitalIcon } from 'lucide-react'
import React from 'react'

function DoctorCreateProfile() {
    return (
        <div className="p-4 ml-50">
            <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
            <div className="flex items-center mb-4">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Doctor"
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
                        <p>Speacialists</p>
                        <select className="border rounded-md p-2 w-60 text-gray-500">
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="1">General Practitioner</option>
                            <option value="2">Cardiology</option>
                            <option value="2">Dermatology</option>
                            <option value="2">Neurology</option>
                            <option value="2">Endocrinology</option>
                            <option value="2">Gastroenterology</option>
                            <option value="2">Orthopedic</option>
                            <option value="2">Pediatrics</option>
                            <option value="2">Urology</option>
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
                    <div>
                        <p>Hospital</p>
                        <select className="border rounded-md p-2 w-60 text-gray-500">
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="1">โรงพยาบาลกรุงเทพ</option>
                            <option value="2">โรงพยาบาลบำรุงราษฏร์</option>
                            <option value="2">โรงพยาบาลพระรามเก้า</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='border  bg-amber-500 w-30 h-10 rounded-md text-white'>Submit</button>
            </div>
        </div>
    )
}

export default DoctorCreateProfile