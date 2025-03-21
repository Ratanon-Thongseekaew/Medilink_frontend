import { Calendar, GraduationCap, Hospital, LayoutDashboard, LogOut, Store, UserRound } from 'lucide-react'
import { useLocation, Link, useNavigate } from 'react-router'
import useUserStore from '../stores/userStore'

function Sidebar() {
  const location = useLocation()
  const logout = useUserStore(state => state.logout)
  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <nav className="w-64 bg-white shadow-md shadow-gray-200 h-full fixed bottom-0 left-0 flex flex-col justify-between">
      <ul className="flex flex-col w-full gap-2 pt-24">
        <li className='flex items-center'>
          <Link
            to="/admin/dashboard"
            className={`px-4 py-2 w-full ${location.pathname === "/admin/dashboard" ? "text-[#1dbfc1]" : "hover:text-[#1dbfc1]"}`}
          >
            <div className="flex gap-3">
              <LayoutDashboard className='w-6 h-6' />
              Dashboard
            </div>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link
            to="/admin/user"
             className={`px-4 py-2 w-full ${location.pathname === "/admin/user" ? "text-[#1dbfc1]" : "hover:text-[#1dbfc1]"}`}
          >
            <div className="flex gap-3">
              <UserRound className='w-6 h-6' />
              Patients
            </div>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link
            to="/admin/online-store"
            className={`px-4 py-2 w-full ${location.pathname === "/admin/online-store" ? "text-[#1dbfc1]" : "hover:text-[#1dbfc1]"}`}
          >
            <div className="flex gap-3">
              <Store className='w-6 h-6' />
              Online Store
            </div>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link
            to="/admin/appointment"
            className={`px-4 py-2 w-full ${location.pathname === "/admin/appointment" ? "text-[#1dbfc1]" : "hover:text-[#1dbfc1]"}`}
          >
            <div className="flex gap-3">
              <Calendar className='w-6 h-6' />
              Appointment
            </div>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link
            to="/admin/doctor-manage"
            className={`px-4 py-2 w-full ${location.pathname === "/admin/doctor-manage" ? "text-[#1dbfc1]" : "hover:text-[#1dbfc1]"}`}
          >
            <div className="flex gap-3">
              <GraduationCap className='w-6 h-6' />
              Doctor Manage
            </div>
          </Link>
        </li>
        <li className='flex items-center'>
          <Link
            to="/admin/hospital"
            className={`px-4 py-2 w-full ${location.pathname === "/admin/hospital" ? "text-[#1dbfc1]" : "hover:text-[#1dbfc1]"}`}
            >
            <div className="flex gap-3">
              <Hospital className='w-6 h-6' />
              Hospital
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col w-full gap-2">
        <li className='flex items-center'>
          <button
            onClick={hdlLogout}
            className={`cursor-pointer px-4 py-2 w-full ${location.pathname === "/admin" ? "text-[#1dbfc1]" : "hover:text-[#1dbfc1]"}`}
          >
            <div className="flex gap-3">
              <LogOut className='w-6 h-6' />
              Logout
            </div>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar