import {  HospitalIcon, Settings,Trash2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import useAdminHospitalStore from '../../stores/AdminHospitalStore'
import useUserStore from '../../stores/userStore'

function AdminHospital() {
  const navigate = useNavigate()
  const token = useUserStore(state=>state.token)
  const hospital = useAdminHospitalStore(state=>state.hospital)
  const fetchHospital = useAdminHospitalStore(state=>state.fetchHospital)
  const deleteHospital = useAdminHospitalStore(state=>state.deleteHospital)

  console.log("Hospital",hospital)
  // console.log(fetchHospital)
  // console.log("cccc",fetchHosspital)
  useEffect(() => {     
         fetchHospital(token);
    
    }, [fetchHospital, token]);
  
  return (
    <div className='flex flex-col flex-wrap ml-70'>
    <button 
      className='border bg-amber-500 p-3 rounded-md mt-5 w-30'
      onClick={() => navigate('/admin/hospital-create-profile')}
    >
      <p className='text-white text-sm'>+ Hospital</p>
    </button>
    
    <p className='flex justify-end mr-7 text-gray-500'>1 2 3 .... 10 11 12</p>
    
    <div className="border border-gray-300 bg-white shadow-md rounded-lg w-300 h-auto p-5">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-center">No.</th>
            <th className="border p-2 text-left">Hospital Name</th>
            <th className="border p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {hospital.map((hospital, index) => (
            <tr key={hospital.id} className="border">
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2 flex items-center gap-3">
                <Link to={`/admin/hospita-profile/${hospital.id}`}
                className= "hover:text-amber-500">{hospital.name}</Link>
              </td>
              <td className="border p-2 text-center">
                <div className="flex justify-center items-center gap-5">
                  <Settings className='w-6 h-6 text-cyan-600 cursor-pointer hover:focus' />
                  <Trash2 
                    className='w-6 h-6 text-red-500 cursor-pointer' 
                    onClick={() => deleteHospital(hospital.id, token)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};


export default AdminHospital