import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";



const PORT = "http://localhost:8888"

const useOrderStore = create(persist(
    (set, get) => ({
      order: null,
      isLoading: false,
    error: null,
      fetchOrder: async (token,orderId) => {
        try {
          const rs = await axios.get(`${PORT}/api/order/${orderId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ order: rs.data.data});
        } catch (err) {
          console.log(err);
          set({ order: null });
        }
      },
    }),
    {
      name: "orderStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useOrderStore;