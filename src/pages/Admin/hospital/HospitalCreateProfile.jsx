import React, { useState } from 'react'
import useAdminHospitalStore from '../../../stores/AdminHospitalStore'
import { toast } from 'react-toastify'
import useUserStore from '../../../stores/userStore'

function HospitalCreateProfile() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const createHospital = useAdminHospitalStore(state => state.createHospital)
    const token = useUserStore(state=>state.token)
    const [input, setInput] = useState({
        name: "",
        contactInfo: "",
        latitude: "",
        longitude: "",
        address: ""
    })

    const hdlChange =(e)=> {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlClearInput = () =>{
        setInput({
            name: "",
            contactInfo: "",
            latitude: "",
            longitude: "",
            address: ""
        })
    }

    const hdlSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const { name, contactInfo, latitude, longitude, address } = input
        if (!name.trim() || !contactInfo?.trim() || !latitude?.trim() || !longitude?.trim() || !address?.trim()) {
            setIsSubmitting(false)
            return toast.error("Please fill all input")
        }

        try {
            const rs = await createHospital(input,token)
            hdlClearInput()
            toast.success('Create Hospital Successfully')
        } catch (error) {
            console.log(error)
            const errMsg =error.response.data.message || error.message
            toast.error(errMsg)
        }
    }
    return (
        <div className="p-4 ml-50">
            <form onSubmit={hdlSubmit}>
                <div className="bg-white shadow rounded-lg p-4 mb-4">
                    <div className="flex">
                        <h2 className="text-lg font-bold mb-2">ข้อมูลโรงพยาบาล</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <p>ชื่อโรงพยาบาล</p>
                            <input
                                type="text"
                                placeholder="Name"
                                name='name'
                                value={input.name}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                                onChange={hdlChange}
                            />
                        </div>
                        <div>
                            <p>ที่อยู่</p>
                            <input
                                type="text"
                                placeholder="ที่อยู่"
                                name='address'
                                value={input.address}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                                onChange={hdlChange}
                            />
                        </div>
                        <div>
                            <p>Latitude</p>
                            <input
                                type="text"
                                placeholder="Latitude"
                                name='latitude'
                                value={input.latitude}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                                onChange={hdlChange}
                            />
                        </div>
                        <div>
                            <p>Longtitude</p>
                            <input
                                type="text"
                                placeholder="Longitude"
                                name='longitude'
                                value={input.longitude}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                                onChange={hdlChange}
                            />
                        </div>
                        <div>
                            <p>contactInfo</p>
                            <input
                                type="text"
                                placeholder="contactInfo"
                                name='contactInfo'
                                value={input.contactInfo}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
                                onChange={hdlChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                <button 
                        className={`border bg-amber-500 w-30 h-10 rounded-md text-white`}> Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default HospitalCreateProfile