import { useNavigate } from 'react-router'
import useUserStore from '../stores/userStore'

function Header() {
  const logout = useUserStore(state => state.logout)
  const navigate = useNavigate()

    const hdlLogout = () => {
        logout()
        navigate("/")
    }

  return (
    <div className='flex justify-between p-4'>
        <img 
          src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741941112/yfg8i6drbfqauvark2rl.png"
          className='w-[150px] md:w-[220px]'
         />
        <button onClick={hdlLogout} className='btn btn-secondary'>Logout</button>
    </div>
  )
}

export default Header