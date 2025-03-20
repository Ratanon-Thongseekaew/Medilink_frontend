import React from 'react'

function Dashboard() {
  return (
    //div Wrap Container
    <div className='flex flex-wrap ml-70 gap-30'>
      
      <div className="flex flex-col items-center justify-center border border-gray-600 w-60 h-60 bg-white shadow-md rounded-xl mt-30 ">
        <h1 className='text-8xl'>30</h1>
        <p className='mt-10 text-2xl'>User</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-gray-600 w-60 h-60 bg-white shadow-md rounded-xl mt-30 ">
        <h1 className='text-8xl'>12</h1>
        <p className='mt-10 text-2xl'>Online Shop</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-gray-600 w-60 h-60 bg-white shadow-md rounded-xl mt-30 ">
        <h1 className='text-8xl'>100</h1>
        <p className='mt-10 text-2xl'>Appoinment</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-gray-600 w-60 h-60 bg-white shadow-md rounded-xl">
        <h1 className='text-8xl'>60</h1>
        <p className='mt-10 text-2xl'>Doctor Manage</p>
      </div>

      <div className="flex flex-col items-center justify-center border border-gray-600 w-60 h-60 bg-white shadow-md rounded-xl">
        <h1 className='text-8xl'>16</h1>
        <p className='mt-10 text-2xl'>Hospital</p>
      </div>


    </div>

  )
}

export default Dashboard