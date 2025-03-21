import axios from "axios"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"


const PORT ='http://localhost:8888'

const useAdminDoctorStore = create(
    persist(
        (set, get) => ({
        doctor: [], 
        doctorById: '',
        specialty: [],
        
        fetchSpecialty: async (token) => {
            try {
                const rs = await axios.get(`${PORT}/api/doctor/specialization/all`,{
                    headers: { Authorization: `Bearer ${token}` },
                })
                set({specialty: rs.data.data})
            } catch (error) {
                console.log(error)
            }
        },
        createDoctor: async (body, token) =>{
            try {
                const rs = await axios.post(`${PORT}/api/doctor/create`,body,{
                    headers: { Authorization: `Bearer ${token}` },
                })
            } catch (error) {
               console.log(error) 
            }
        },
        fetchDoctor: async (token)=> {
            try {
                const rs = await axios.get(`${PORT}/api/doctor/alldoctors`,{
                    headers: { Authorization: `Bearer ${token}` },
                })
                set({doctor :rs.data.doctorDatas})
            } catch (error) {
                console.log(error)
            }
        },

        fetchDoctorById: async (id, token)=>{
            try {
                const rs = await axios.get(`${PORT}/api/doctor/${id}`,{
                    headers: { Authorization: `Bearer ${token}` },
                })
                set({ doctorById: rs.data})
            } catch (error) {
               console.log(error) 
            }
        },
        updateDoctor: async (id, token, body) => {
            try {
                const rs = await axios.patch(`${PORT}/api/doctor/update/${id}`,body,{
                    headers: { Authorization: `Bearer ${token}` }
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteDoctor: async (id, token) => {
            if (window.confirm("Are you sure you want to delete this Doctor?")) {
                try {

                    console.log(id)
                    await axios.delete(`${PORT}/api/doctor/${id}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    const d = get().doctor
                    console.log('doctor', d)
                    // Remove doctor from store after deletion
                    set((state) => ({
                        doctor: state.doctor.filter((doctor) => doctor.id !== id),
                    }));
                } catch (err) {
                    console.log(err);
                }
            }
        }        


        }),
        {
            name: "adminDoctorStore",
            storage: createJSONStorage(() => localStorage),
        }
    )
)
export default useAdminDoctorStore;