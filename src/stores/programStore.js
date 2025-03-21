import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const PORT = "http://localhost:8888";

const useProgramStore = create(
  persist(
    (set, get) => ({
      allPrograms: [],
      program: null,

      createProgram: async(input,token) => {
        const rs = await axios.post(`${PORT}/api/program/create`,input,{
          headers: { Authorization: `Bearer ${token}` },
        })
      },

      fetchAllPrograms: async(token)=>{
        try {
          const rs = await axios.get(`${PORT}/api/program/all`,{
            headers: { Authorization: `Bearer ${token}` },
          })
          console.log("AllPrograms",rs.data.getPrograms)
          set({allPrograms: rs.data.getPrograms})
        } catch (error) {
          console.log(error)
        }
      },

      fetchProgram: async (id,token) => {
        try {
          const rs = await axios.get(`${PORT}/api/program/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ program: rs.data.userGetProgram });
        } catch (err) {
          console.log(err);
          set({ program: null });
        }
      },

      updateProgram: async (id, token, programData)=>{
        try {
          const rs = await axios.put(`${PORT}/api/program/update/${id}`,{
            name : programData.name,
            description : programData.description,
            price: programData.price,
          },{
            headers: { Authorization: `Bearer ${token}` }
          })
        } catch (error) {
          console.log(error)
        }
      },

      deleteProgram: async (id, token) =>{
        try {
          const rs = await axios.delete(`${PORT}/api/program/${id}`,{
            headers: { Authorization: `Bearer ${token}` },
          })
          set((state)=>({
            allPrograms: state.allPrograms.filter((allPrograms)=>allPrograms.id !== id)
          }))
        } catch (error) {
          console.log(error)
        }
      },
    }),
    {
      name: "programStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProgramStore;
