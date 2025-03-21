import axios from "axios"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"


const PORT = 'http://localhost:8888'

const useAdminHospitalStore = create(
    persist(
        (set, get) => ({

            hospital: [],
            hospitalId: '',

            createHospital: async (input, token) => {
                const rs = await axios.post(`${PORT}/api/hospital/create`, input, {
                    headers: { Authorization: `Bearer ${token}` },
                }

                )
            },

            fetchHospital: async (token) => {
                try {
                    const rs = await axios.get(`${PORT}/api/hospital/getAllHospital`, {
                        headers: { Authorization: `Bearer ${token}` },
                    })
                    set({ hospital: rs.data.data });

                } catch (error) {
                    console.log(error)
                }
            },

            fetchHospitalById: async (id,token) => {
                try {
                    const rs = await axios.get(`${PORT}/api/hospital/${id}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    set({  hospitalId: rs.data.getHospital }); 
                } catch (error) {
                    console.log(error);
                }
            },
            

            updateHospital: async (id, token, hospitalData) => {
                try {
                    const rs = await axios.patch(`${PORT}/api/hospital/${id}`, {
                        name: hospitalData.name,
                        contactInfo: hospitalData.contactInfo,
                        address: hospitalData.address, 
                    },
                        {
                            headers: { Authorization: `Bearer ${token}` }
                        }); 
                } catch (error) {
                    console.log(error)
                }
            },

            deleteHospital: async (id, token) => {
                if (window.confirm("Are you sure you want to delete this Hospital?")) {
                    try {

                        console.log(id)
                        await axios.delete(`${PORT}/api/hospital/${id}`, {
                            headers: { Authorization: `Bearer ${token}` },
                        });

                        // Remove user from store after deletion
                        set((state) => ({
                            hospital: state.hospital.filter((hospital) => hospital.id !== id),
                        }));
                    } catch (err) {
                        console.log(err);
                    }
                }
            },
            
            // setHospitalId: (id) => set({ hospitalId: id }),
        }),
        {
            name: "adminHospitalStore",
            storage: createJSONStorage(() => localStorage),
        }
    )
)
export default useAdminHospitalStore;