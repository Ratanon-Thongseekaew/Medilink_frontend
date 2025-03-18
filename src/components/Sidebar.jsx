import { Calendar, GraduationCap, Home, Hospital, LayoutDashboard, LogOut, Store, UserRound } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'


function Sidebar() {
  return (
    <nav className="w-50 bg-white h-screen fixed top-0 left-0">
      <ul className="flex flex-col w-full">
      <li className="w-full mt-10">
          <Link
            to="/*"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <Home className='w-6 h-6' />
              Logo
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <LayoutDashboard className='w-6 h-6' />
              Dashboard
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/user"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <UserRound className='w-6 h-6' />
              User
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/online-store"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <Store className='w-6 h-6' />
              Online Store
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/appointment"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <Calendar className='w-6 h-6' />
              Appointment
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/doctor-manage"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <GraduationCap className='w-6 h-6' />
              Doctor Manage
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/hospital"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <Hospital className='w-6 h-6' />
              Hospital
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            className="block py-2 px-4 hover:bg-amber-500 hover:text-white"
          >
            <div className="flex gap-3 mt-3">
              <LogOut className='w-6 h-6' />
              Logout
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar