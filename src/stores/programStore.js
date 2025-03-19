import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const PORT = "http://localhost:8888";

const useProgramStore = create(
  persist(
    (set, get) => ({
      program: null,
      fetchProgram: async (token,id) => {
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
    }),
    {
      name: "programStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProgramStore;
