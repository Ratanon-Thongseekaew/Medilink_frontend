import { FilePenLineIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useUserStore from '../../../stores/userStore'
import useProgramStore from '../../../stores/programStore'

function AdminListPackage() {
    const {id} = useParams()
    const token = useUserStore(state=>state.token)
    const fetchProgram = useProgramStore(state=>state.fetchProgram)
    const program = useProgramStore(state=>state.program)
    const updateProgram = useProgramStore(state=>state.updateProgram)

    const[programData, setProgramData] = useState({
        name: '',
        description: '',
        price: ''
    })

    const [isEditing, setIsEditing] = useState(false)

    useEffect(()=>{
        fetchProgram(id,token)
    },[])

    const hdlChange = (e) => {
      setProgramData((prv)=>({...prv,[e.target.name]: e.target.value}))  
    }
  
    const hdlUpdate = async () =>{
        try {
            if(id){
                await updateProgram(id, token, programData)
                setIsEditing(false)
                fetchProgram(id,token)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="p-6 ml-55 bg-white rounded-lg shadow-md">
                <div className="flex">
                <h1 className="text-2xl font-bold mb-4">รายละเอียดแพ็กเกจ</h1>
                <div className="ml-auto flex">
                    <FilePenLineIcon className='w-8 h-8 text-amber-500'
                    onClick={()=>setIsEditing(true)}/>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p>ชื่อแพ็กเกจ</p>
                        {isEditing ?(
                            <input
                            type='text'
                            name='name'
                            defaultValue={program?.name}
                            onChange={hdlChange}
                            className='border p-1 rounded'
                            />
                        ): (
                            <p>{program?.name}</p>
                        )}
                    </div>
                    <div>
                        <p> วันที่เพิ่มแพ็กเกจ </p>
                        <p>{program.createdAt}</p>
                    </div>
                    <div>
                        <p>ราคา</p>
                        {isEditing ?(
                            <input 
                            type='text'
                            name='price'
                            defaultValue={program?.price || ''}
                            onChange={hdlChange}
                            className='border p-1 rounded'
                            />
                        ):(
                            <p>{program?.price}</p>
                        )}
                        
                    </div>
                    <div>
                        <p>โรงพยาบาล</p>
                        <p >ไม่มีใน Database</p>
                    </div>
                </div>


            </div>

            <div className="p-6 ml-55 mt-5 bg-white rounded-lg shadow-md">
                <div className="mb-4 ">
                    <h2 className="text-lg font-semibold">รายละเอียดแพ็กเกจ</h2>
                    {isEditing?(
                        <input
                            type ="text"
                            name="description"
                            defaultValue={program?.description}
                            onChange={hdlChange}
                            className='border p-1 rounded'
                        />
                    ) :(
                        <p> {program?.description}</p>
                    )}
                </div>
                {isEditing && (
                    <button
                        onClick={hdlUpdate}
                        className="bg-amber-500 text-white p-2 rounded mt-4"
                    >
                        Update
                    </button>
                )}
            </div>

        </>
    )
}

export default AdminListPackage