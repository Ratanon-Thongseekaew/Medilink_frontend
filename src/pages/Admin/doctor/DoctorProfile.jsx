import { ChevronDown, Clock, FilePenLine, HospitalIcon, UserPenIcon } from 'lucide-react'
import React from 'react'

function DoctorProfile() {
    return (
        <div className="p-4 ml-50">
            <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
            <div className="flex items-center mb-4">
                <img
                    src="https://via.placeholder.com/150"
                    alt="User"
                    className="rounded-full w-20 h-20 mr-4"
                />
                <div className="flex-1 min-w-0">
                    <p className="text-xl whitespace-nowrap">นพ.เพียววี่ เฮคตวอเตอร์</p>
                    <p className="text-gray-500 whitespace-nowrap">GP</p>
                    <p className="text-gray-500 whitespace-nowrap">BKK, Thailand</p>
                </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <div className="flex">
                    <h2 className="text-lg font-bold mb-2">Personal Information</h2>
                    <UserPenIcon className='w-8 h-8  bg-amber-500 ml-260' />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>Name</p>
                        <p>นพ.เพียววี่ เฮคตวอเตอร์</p>
                    </div>
                    <div>
                        <p>Date Of Birth</p>
                        <p>14/2/2000</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p>Male</p>
                    </div>
                    <div>
                        <p>Age</p>
                       <p>24</p>
                    </div>
                    <div>
                        <p>Speacialists</p>
                         <p>Cardiology</p>
                    </div>
                    <div>
                        <p>Bio</p>
                        <p>Personal Information</p>
                    </div>
                </div>
            </div>
             {/* Calendar wrap */}
      <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-[auto_1fr_auto] gap-4">
        <div className="flex flex-col items-center">
          <div className="text-gray-500">Thu</div>
          <div className="bg-gray-200 text-xl font-semibold rounded-md px-2 py-1">15</div>
        </div>

        <div className="flex  items-center">
          <div className="flex flex-col items-center text-gray-700">
            <div className="flex gap-2">
              <Clock className="w-5 ml-2" />
              <span>09:00am - 09:30am</span>
            </div>
            <div className="flex gap-2 mt-4">
              <HospitalIcon className='w-5' />
              <span>โรงพยาบาลกรุงเทพ</span>
            </div>
          </div>

        </div>

        <FilePenLine className='w-8 h-8  bg-amber-500'/>
      </div>


        </div>
    )
}

export default DoctorProfile