import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import useUserStore from '../stores/userStore'
import { checkOutStatus } from './test'

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

navigate('/')

        } catch (error) {

            console.log(error);

        }



    }



    if (status === 'open'){
        return <Navigate to="/" />
    }





        return (
            <div>Loading........</div>
        )
}

export default CheckoutComplete