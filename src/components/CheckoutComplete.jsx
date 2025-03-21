import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import useUserStore from '../stores/userStore'
import { checkOutStatus } from '../stores/checkoutStore'

function CheckoutComplete() {
const navigate = useNavigate()
    const { session } = useParams()
    const token = useUserStore(state => state.token)
    const [status, setStatus] = useState(null)



    useEffect(() => {

        fetchPayment()


    }, [])

    const fetchPayment = async () => {

        try {

            const res = await checkOutStatus(token, session)
            setStatus(res.data.status)
            console.log(res);
            console.log("success", res.data.message);

navigate('/thankyou-package')

        } catch (error) {

            console.log(error);

        }



    }



    if (status === 'open'){
        return <Navigate to="/" />
    }





        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
      {/* Spinner */}
      <span className="loading loading-infinity loading-lg text-primary mb-6"></span>

      {/* Text */}
      <h1 className="text-2xl font-bold animate-pulse">Loading, please wait...</h1>

      {/* Optional Progress Bar */}
      <progress className="progress w-56 mt-6 bg-neutral" value="40" max="100"></progress>
    </div>
        )
}

export default CheckoutComplete