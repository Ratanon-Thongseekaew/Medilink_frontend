
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Loader from '../../components/Loader'

function AdminHome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/admin/dashboard")
    }, 3000)

    return () => clearTimeout(timer)
  })
  return (
    <div className="text-center bg-slate-50 min-h-screen pt-72 min-w-screen z-50 absolute top-0">
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741941112/yfg8i6drbfqauvark2rl.png"
          className='w-[200px]'
        />
      </div>
      <div className="flex justify-center py-6">
        <Loader />
      </div>
    </div>
  )
}

export default AdminHome