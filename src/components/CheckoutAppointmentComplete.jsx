import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import useUserStore from '../stores/userStore'
import { checkOutAppointmentStatus } from '../stores/checkoutStore'

function CheckoutAppoinmentComplete() {
const navigate = useNavigate()
    const { session } = useParams()
    const token = useUserStore(state => state.token)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        fetchPayment()
    }, [])

    const fetchPayment = async () => {
        try {

            const res = await checkOutAppointmentStatus(token, session)
            setStatus(res.data.status)
            console.log(res);
            console.log("success", res.data.message);
        navigate('/thankyou-appointment')
        } catch (error) {
            console.log(error);
        }
    }

    if (status === 'open'){
        return <Navigate to="/" />
    }

        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 animate-fade-in px-4 absolute top-0 z-40 min-w-full">
                {/* Logo */}
                <img
                src="https://res.cloudinary.com/dpeegtiv8/image/upload/v1741939571/logo_te6v3y.png"
                alt="Hospital Logo"
                className="w-64 h-24 mb-6 drop-shadow-md animate-logo-pop"
                />

                {/* Spinner */}
                <div className="relative mb-8">
                <span className="loading loading-infinity loading-lg text-green-500 scale-125 animate-spin-slow" />
                <div className="absolute inset-0 animate-ping-slow rounded-full border-4 border-green-300 opacity-20"></div>
                </div>

                {/* Text */}
                <h1 className="text-2xl font-semibold text-center text-green-700 animate-pulse">
                กำลังโหลดข้อมูล... กรุณารอสักครู่
                </h1>

                {/* Progress Bar */}
                <div className="w-64 h-3 bg-gray-200 rounded mt-8 overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded animate-fill-bar-slow"></div>
                </div>
            </div>
        )
}

export default CheckoutAppoinmentComplete