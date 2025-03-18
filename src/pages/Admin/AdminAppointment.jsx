import { ChevronDown, Clock, UserCircle } from 'lucide-react'
import React from 'react'

function AdminAppointment() {
  return (
    //Main wrap
    <div className='flex flex-col flex-wrap ml-70'>
      {/* Header wrap */}
      <div className="flex mt-10 gap-7">
        <p className='flex justify-center items-center border w-25 h-10 rounded-md'>Upcoming</p>
        <p className='flex justify-center items-center border w-25 h-10 rounded-md'>Past</p>
        <p className='flex justify-center items-center border w-25 h-10 rounded-md'>Cancelled</p>
        <button className='flex items-center border bg-cyan-600 p-3 rounded-md w-40 h-10 ml-150'>
          <p className='text-white text-sm'>+New Appoinment</p>
        </button>
      </div>
      <p className='flex justify-end mr-10 mt-2 text-gray-500'>1 2 3 .... 10 11 12</p>

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
              <UserCircle className='w-5' />
              <span>นพ.ท็อปปี้ ฟิกม่าเลิศ</span>
            </div>
          </div>

          <div className="flex flex-col ml-30">
              <div className="text-gray-600">แผนก: อายุรกรรม</div>
              <a href="#" className="text-blue-500 mt-4 inline-block">View Documents</a>
          </div>

        </div>

        <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-195">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
      </div>


    </div>
  )
}

export default AdminAppointment