import { Bell } from 'lucide-react'
import React from 'react'

function HeaderAdmin() {
  return (
    <div className='px-6 fixed top-0 h-20 w-full bg-white z-30 text-center shadow-md shadow-gray-100'>
        <div className='flex items-center justify-between h-full'>
            <img 
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741941112/yfg8i6drbfqauvark2rl.png"
                className='w-[150px]'
            />
            <div className='flex gap-6 items-center'>
                <div className='relative'>
                    <Bell className='w-6 h-6 stroke-2 stroke-gray-500' />
                    <div className='bg-red-500 w-4 h-4 rounded-full absolute -top-2 -right-1 text-white text-[10px] flex justify-center items-center'>1</div>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-4_gel7vc.jpg" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HeaderAdmin