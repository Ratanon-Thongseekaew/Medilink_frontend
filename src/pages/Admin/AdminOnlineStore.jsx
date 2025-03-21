import { ChevronDown, Settings, ShoppingBag, Trash2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import useUserStore from '../../stores/userStore';
import useProgramStore from '../../stores/programStore';
function AdminOnlineStore() {
  const navigate = useNavigate();
  const token = useUserStore(state=>state.token)
  const allPrograms = useProgramStore(state=>state.allPrograms)
  const fetchAllPrograms = useProgramStore(state=>state.fetchAllPrograms)
  const deleteProgram = useProgramStore(state=>state.deleteProgram)

  useEffect(()=>{
    fetchAllPrograms(token)
  },[])
  return (
    //Wrap container
    <div className='flex flex-col flex-wrap ml-70'>

      <button className='border  bg-amber-500 p-3 rounded-md mt-5 w-30'
      onClick={() => navigate('/admin/create-package')}>
        <p className='text-white text-sm'>+เพิ่มแพ็คเกจ</p>
      </button>
      <p className='flex justify-end mr-7 text-gray-500'>1 2 3 .... 10 11 12</p>

      <div className="border border-gray-300 bg-white shadow-md rounded-lg w-full h-auto p-5">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-center">No.</th>
                  <th className="border p-2 text-left">Package Name</th>
                  <th className="border p-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {allPrograms.map((allPrograms, index) => (
                  <tr key={allPrograms.id} className="border">
                    <td className="border p-2 text-center">{index + 1}</td>
                    <td className="border p-2 flex items-center gap-3">
                      <Link to={`/admin/list-package/${allPrograms.id}`}
                      className= "hover:text-amber-500">{allPrograms.name}</Link>
                    </td>
                    <td className="border p-2 text-center">
                      <div className="flex justify-center items-center gap-5">
                        <Settings className='w-6 h-6 text-cyan-600 cursor-pointer hover:focus' />
                        <Trash2 
                          className='w-6 h-6 text-red-500 cursor-pointer' 
                          onClick={() => deleteProgram(allPrograms.id, token)}
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

export default AdminOnlineStore