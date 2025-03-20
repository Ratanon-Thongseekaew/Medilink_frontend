import { FilePenLineIcon } from 'lucide-react'
import React from 'react'

function AdminListPackage() {
    return (
        <>
            <div className="p-6 ml-55 bg-white rounded-lg shadow-md">
                <div className="flex">
                <h1 className="text-2xl font-bold mb-4">รายละเอียดแพ็กเกจ</h1>
                <div className="ml-auto flex">
                    <FilePenLineIcon className='w-8 h-8 text-amber-500'/>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            ชื่อแพ็กเกจ
                        </label>
                        <p className='mt-1'>ตรวจสุขภาพทั่วไป</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            วันที่เพิ่มแพ็กเกจ
                        </label>
                        <p className='mt-1'>12/12/12</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            ประเภทแพ็กเกจ
                        </label>
                        <p className='mt-1'>สุขภาพทั่วไป</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            โรงพยาบาล
                        </label>
                        <p className='mt-1'>โรงพยาบาลหรุงเทพ</p>
                    </div>
                </div>


            </div>

            <div className="p-6 ml-55 mt-5 bg-white rounded-lg shadow-md">
                <div className="mb-4 ">
                    <h2 className="text-lg font-semibold">รายละเอียดแพ็กเกจ</h2>
                    <p> ตรวจสุขภาพทั่วไป ราคา 5000 บาm</p>
                </div>
            </div>

        </>
    )
}

export default AdminListPackage