
import { ChevronDown, FilePenLineIcon } from 'lucide-react'
import React from 'react'

function HospitalProfile() {
    return (
        <div className="p-4 ml-50">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <div className="flex">
                    <h2 className="text-lg font-bold mb-2">ข้อมูลโรงพยาบาล</h2>
                    <div className="ml-auto flex">
                        <FilePenLineIcon className='w-8 h-8 text-amber-500'/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>ชื่อโรงพยาบาล</p>
                        <p>โรงพยาบาลกรุงเทพ</p>
                    </div>
                    <div>
                        <p>ที่อยู่</p>
                        <p>Bkk</p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <p>0222222222</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HospitalProfile