import React from 'react'

function HospitalCreateProfile() {
    return (
        <div className="p-4 ml-50">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <div className="flex">
                    <h2 className="text-lg font-bold mb-2">ข้อมูลโรงพยาบาล</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>ชื่อโรงพยาบาล</p>
                        <input
                            type="text"
                            placeholder="Name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <p>ที่อยู่</p>
                        <input
                            type="text"
                            placeholder="ที่อยู่"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <p>Latitude</p>
                        <input
                            type="text"
                            placeholder="Latitude"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <p>Longtitude</p>
                        <input
                            type="text"
                            placeholder="Longtitude"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className='border  bg-amber-500 w-30 h-10 rounded-md text-white'>Submit</button>
            </div>
        </div>
    )
}

export default HospitalCreateProfile