import { Outlet } from "react-router"
import Sidebar from '../components/Sidebar'
import HeaderAdmin from './HeaderAdmin'

function LayoutAdmin() {
    return (
        <div className="bg-[#EAEDF7] min-h-screen min-w-screen">
          <HeaderAdmin />
          <main className='mt-20'>
            <Outlet />
            <Sidebar />
          </main>
        </div>
      )
}

export default LayoutAdmin