import { ChevronDown } from 'lucide-react'
import React from 'react'

function AdminCreatePackage() {
  return (
    <>
            <div className="p-6 ml-55 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">ข้อมูลแพ็กเกจ</h1>
                <div className="flex justify-center items-center border bg-gray-300 w-35 h-8 rounded-md ml-320">
                        <button> Submit</button>
                    </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            ชื่อแพ็กเกจ
                        </label>
                        <input
                            type="text"
                            placeholder="Package Name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            วันที่เพิ่มแพ็กเกจ
                        </label>
                        <input
                            type="date"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            ประเภทแพ็กเกจ
                        </label>
                        <input
                            type="text"
                            placeholder="Category"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            โรงพยาบาล
                        </label>
                        <input
                            type="text"
                            placeholder="Hopital Name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                </div>


            </div>

            <div className="p-6 ml-55 mt-5 bg-white rounded-lg shadow-md">
                <div className="mb-4 ">
                    <h2 className="text-lg font-semibold">รายละเอียดแพ็กเกจ</h2>
                    <div className="border ">
                        <input
                            type="text"
                            placeholder="รายละเอียดแพ็กเกจ"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                        />
                    </div>
                </div>


            </div>

        </>
  )
}

export default AdminCreatePackage