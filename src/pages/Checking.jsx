
import useUserStore from '../stores/userStore'

function Checking() {
    const logout = useUserStore(state => state.logout)

    const hdlLogout = () => {
        logout()
    }
    
  return (
    <div>
        <button onClick={hdlLogout} className='btn btn-primary'>Logout</button>
    </div>
  )
}

export default Checking