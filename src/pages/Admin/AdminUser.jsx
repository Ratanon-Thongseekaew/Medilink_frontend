import { ArrowDown, ArrowDown01, ChevronDown, UserCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function AdminUser() {
  return (

    //Wrap container
    <div className='flex flex-col flex-wrap ml-70'>

      <button className='border bg-cyan-600 p-3 rounded-md mt-5 w-30'>
       <p className='text-white text-sm'>+New Patient</p>
      </button>
        <p className='flex justify-end mr-7 text-gray-500'>1 2 3 .... 10 11 12</p>
      
      {/*wrap content */}
      <div className="flex flex-col border border-gray-300  rounded-md w-300 h-155 p-5">
        <div className="flex">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>

        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>
        <div className="flex mt-5">
          <UserCircle/>
          <p className='ml-3'>นางสาว สวัสดี สีชมพู</p>
          <Link to="/*" className='text-blue-700 underline ml-30'>View Profile</Link>
          <div className="flex justify-center items-center border bg-gray-300 w-20 h-8 rounded-md ml-175">
            <p>Edit</p>
            <ChevronDown className='w-4 ml-2 ' />
          </div>
        </div>


      </div>
      
      </div>
  )
}

export default AdminUser