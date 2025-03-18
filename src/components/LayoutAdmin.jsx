import React from 'react'
import { Outlet } from "react-router"
import Sidebar from '../components/Sidebar'

function LayoutAdmin() {
    return (
        <div className="bg-slate-50 min-h-screen">

          <main>
            <Outlet />
            <Sidebar />
          </main>
        
        </div>
      )
}

export default LayoutAdmin