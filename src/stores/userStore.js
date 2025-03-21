import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const PORT = "http://localhost:8888";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: "",
      login: async (input) => {
        try {
          const rs = await axios.post(`${PORT}/api/auth/login`, input);
          set({ token: rs.data.token, user: rs.data.payload });
          console.log(rs.data);
          return rs.data;
        } catch (error) {
          console.log(error);
        }
      },
      registerUser: async (input) => {
        const rs = await axios.post(`${PORT}/api/auth/register`, input);
      },
      logout: () => set({ token: "", user: null }),
      fetchProfile: async () => {
        const token = get().token;
        if (token) {
          try {
            const rs = await axios.get(`${PORT}/api/user/me`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            set({ user: rs.data.user });
          } catch (err) {
            console.log(err);
            set({ token: "", user: null });
          }
        }
      },
    }),
    {
      name: "userStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

useUserStore.subscribe((state) => state.token),
  (token) => {
    if (token) {
      useUserStore.getState().fetchProfile();
    }
  };

export default useUserStore;
