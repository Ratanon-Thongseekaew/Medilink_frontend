import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRouter.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <>
        <AppRouter />
        <ToastContainer />
    </>
)
