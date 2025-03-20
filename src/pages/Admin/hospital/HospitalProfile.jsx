
import { ChevronDown, FilePenLineIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import useUserStore from '../../../stores/userStore'
import useAdminHospitalStore from "../../../stores/AdminHospitalStore"
import { useParams } from 'react-router'


function HospitalProfile() {
    const {id} = useParams()
    const token = useUserStore(state => state.token)
    const fetchHospitalById = useAdminHospitalStore(state => state.fetchHospitalById)
    const updateHospital = useAdminHospitalStore(state=>state.updateHospital)
    const hospitalId = useAdminHospitalStore(state=>state.hospitalId)
    const [hospitalData, setHospitalData] = useState({
        name: '',
        address: '',
        contactInfo: ''
    })  
    const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
        fetchHospitalById(id,token)
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setHospitalData({
            ...hospitalData,
            [name]: value,
        });
    };

    

    const handleUpdate = async () => {
        console.log('heello',id)
        if (id) {
            await updateHospital(id, token, hospitalData)
            setIsEditing(false)
        }
    }
    return (
        <div className="p-4 ml-50">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <div className="flex">
                    <h2 className="text-lg font-bold mb-2">ข้อมูลโรงพยาบาล</h2>
                    <div className="ml-auto flex">
                        <FilePenLineIcon
                            className="w-8 h-8 text-amber-500 cursor-pointer"
                            onClick={() => setIsEditing(true)} // Enable edit mode on icon click
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p>ชื่อโรงพยาบาล</p>
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                defaultValue={hospitalId?.name || ''}
                                onChange={handleChange}
                                className="border p-1 rounded"
                            />
                        ) : (
                            <p>{hospitalId?.name}</p>
                        )}
                    </div>
                    <div>
                        <p>ที่อยู่</p>
                        {isEditing ? (
                            <input
                                type="text"
                                name="address"
                                defaultValue={hospitalId?.location?.address || ''}
                                onChange={handleChange}
                                className="border p-1 rounded"
                            />
                        ) : (
                            <p>{hospitalId?.location?.address}</p>
                        )}
                    </div>
                    <div>
                        <p>Contact</p>
                        {isEditing ? (
                            <input
                                type="text"
                                name="contactInfo"
                                defaultValue={hospitalId?.contactInfo || ''}
                                onChange={handleChange}
                                className="border p-1 rounded"
                            />
                        ) : (
                            <p>{hospitalId?.contactInfo}</p>
                        )}
                    </div>
                </div>

                {isEditing && (
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white p-2 rounded mt-4"
                    >
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}
export default HospitalProfile