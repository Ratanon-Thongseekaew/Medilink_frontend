import { ChevronDown, Settings, Trash2, UserCircle } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router'

function AdminDoctorManage() {
  const navigate = useNavigate()
  return (
    //Wrap container
    <div className='flex flex-col flex-wrap ml-70'>

      <button className='border bg-amber-500 p-3 rounded-md mt-5 w-30'
        onClick={()=> navigate('/admin/doctor-create-profile')}>
       <p className='text-white text-sm'>+New Doctor</p>
      </button>
        <p className='flex justify-end mr-7 text-gray-500'>1 2 3 .... 10 11 12</p>
      
      {/*wrap content */}
      <div className="flex flex-col border border-gray-300 bg-white shadow-md rounded-lg w-300 h-155 p-5">
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นพ.เพียววี่ เฮคตวอเตอร์</p>
          <Link to="/admin/doctor-profile" className='text-amber-600 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center gap-5 ml-160">
            <Settings className='w-6 h-6  text-cyan-500'/>
            <Trash2 className='w-6 h-6 text-red-500'/>
          </div>
        </div>

      </div>
      
      </div>
  )
}

export default AdminDoctorManage