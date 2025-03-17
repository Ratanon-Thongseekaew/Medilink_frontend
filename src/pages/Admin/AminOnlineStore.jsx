import { ChevronDown, ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function AminOnlineStore() {
  return (
    //Wrap container
    <div className='flex flex-col flex-wrap ml-70'>

      <button className='border bg-cyan-600 p-3 rounded-md mt-5 w-30'>
        <p className='text-white text-sm'>เพิ่มแพ็คเกจ</p>
      </button>
      <p className='flex justify-end mr-7 text-gray-500'>1 2 3 .... 10 11 12</p>
      {/*wrap content */}
      <div className="flex flex-col border border-gray-300  rounded-md w-300 h-155 p-5">
      <div className="flex mt-5">
          <ShoppingBag/>
          <Link to="/admin/list-package" className='text-amber-600 ml-5'>แพ็คเกจตรวจสุขภาพพื้นฐาน และทั่วไป</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-195">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>

        
      </div>


    </div>
  )
}

export default AminOnlineStore