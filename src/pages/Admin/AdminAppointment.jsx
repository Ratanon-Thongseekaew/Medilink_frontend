import {  Clock, UserCircle } from 'lucide-react'
import React from 'react'


function AdminAppointment() {
  return (
    //Main wrap
    <div className='flex flex-col flex-wrap pl-70 pr-8 w-full'>
     
      <p className='flex justify-end mr-10 mt-2 text-gray-500'>1 2 3 .... 10 11 12</p>

      {/* Calendar wrap */}
      <div className="space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 grid grid-cols-[80px_1fr_100px] gap-4"
          >
            {/* วันที่ */}
            <div className="flex flex-col items-center">
              <div className="text-amber-500">Thu</div>
              <div className="bg-amber-500 text-xl font-semibold rounded-md w-10 h-10 px-2 py-2">
                15
              </div>
            </div>

            {/* รายละเอียดหมอ + คนไข้ */}
            <div className="flex items-center">
              <div className="flex flex-col items-center text-gray-700">
                <div className="flex gap-2 items-center">
                  <Clock className="w-5 ml-2" />
                  <span>09:00am - 09:30am</span>
                </div>
                <div className="flex gap-2 mt-4 items-center">
                  <UserCircle className="w-5" />
                  <span className="whitespace-normal">นพ. ปวเรศ วิชัยโย</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 ml-8 text-gray-600">
                <div>คนไข้: นางสาว สวัสดี สีชมพู</div>
                <div>นัดวันที่: 12/12/25</div>
              </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}

export default AdminAppointment