import { Settings, Trash2, UserCircle } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import useUserStore from '../../stores/userStore'
import useAdminDoctorStore from '../../stores/AdminDoctorStore'

function AdminDoctorManage() {
  const navigate = useNavigate()
  const token = useUserStore(state=>state.token)
  const doctor = useAdminDoctorStore(state=>state.doctor)
  const fetchDoctor = useAdminDoctorStore(state=>state.fetchDoctor)
  const deleteDoctor = useAdminDoctorStore(state=>state.deleteDoctor)

  useEffect(()=>{
    fetchDoctor(token)
  },[])

  return (
    //Wrap container
    <div className='flex flex-col flex-wrap pl-70 pr-8 w-full'>
      <button
        className='border bg-amber-500 p-3 rounded-md mt-5 w-30'
        onClick={() => navigate('/admin/doctor-create-profile')}
      >
        <p className='text-white text-sm'>+ New Doctor</p>
      </button>
      
      <p className='flex justify-end mr-7 text-gray-500'>1 2 3 .... 10 11 12</p>
      
      <div className='border border-gray-300 bg-white shadow-md rounded-lg w-full h-auto p-5'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border p-2 text-center'>No.</th>
              <th className='border p-2 text-left'>Doctor Name</th>
              <th className='border p-2 text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctor?.map((doctor, index) => (
              <tr key={doctor.id} className='border'>
                <td className='border p-2 text-center'>{index + 1}</td>
                <td className='border p-2'>
                  <Link
                    to={`/admin/doctor-profile/${doctor.id}`}
                    className='hover:text-amber-500'
                  >
                    {doctor.firstname} {doctor.lastname}
                  </Link>
                </td>
                <td className='border p-2 text-center'>
                  <div className='flex justify-center items-center gap-5'>
                    <Settings className='w-6 h-6 text-cyan-600 cursor-pointer hover:focus' />
                    <Trash2
                      className='w-6 h-6 text-red-500 cursor-pointer'
                      onClick={() => deleteDoctor(doctor.id, token)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDoctorManage