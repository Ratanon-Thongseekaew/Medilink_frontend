import {Settings, Trash2} from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router'
import useAdminUserStore from '../../stores/AdminUserStore';
import useUserStore from '../../stores/userStore';

function AdminUser() {
  const token = useUserStore(state=> state.token)
  const users = useAdminUserStore(state => state.users)
  const fetchUsers = useAdminUserStore(state=>state.fetchUsers)
  const deleteUser = useAdminUserStore(state=>state.deleteUser)

  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers(token);
    };

    fetchData();
  }, [fetchUsers, token]);

  return (

    //Wrap container
    <div className='flex flex-col flex-wrap pl-70 pr-8 w-full'>
      <p className='flex justify-end mr-7 text-gray-500'>1 2 3 .... 10 11 12</p>
      
      <div className="border border-gray-300 bg-white shadow-md rounded-lg w-full h-auto p-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-center">No.</th>
              <th className="border p-2 text-left">Patient Name</th>
              <th className="border p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">
                  <Link to={`/admin/user-profile/${user.id}`} className='hover:text-amber-500'>
                    {user.firstname} {user.lastname}
                  </Link>
                </td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center items-center gap-5">
                    <Settings className='w-6 h-6 text-cyan-600 cursor-pointer' />
                    <Trash2 
                      className='w-6 h-6 text-red-500 cursor-pointer' 
                      onClick={() => deleteUser(user.id, token)}
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
    }
    

export default AdminUser