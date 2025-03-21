
import axios from 'axios';
import {create} from 'zustand'
import {createJSONStorage, persist} from "zustand/middleware"

const PORT = "http://localhost:8888"

const useAdminUserStore = create(
    persist(
        (set, get) => ({
            
            users: [], // Store users list
            userById: '',

            fetchUsers: async (token) => {
                try {
                    const rs = await axios.get(`${PORT}/api/user`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    set({ users: rs.data.getUser });
                } catch (err) {
                    console.log(err);
                }
            },

            updateUser: async (id, token, userData)=>{
                try {
                    const rs = await axios.patch(`${PORT}/api/user/${id}`,{
                       phone: userData.phone,
                       role: userData.role 
                    },
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                } catch (error) {
                    console.log('error update user', error)
                }
            },

            fetchUserById: async (id,token)=> {
                try {
                    const rs = await axios.get(`${PORT}/api/user/${id}`,{
                        headers: { Authorization: `Bearer ${token}` }, 
                    })
                    // console.log('userById', rs.data.user)
                    set({userById : rs.data.user})
                } catch (error) {
                    console.log(error)
                }
            },

            deleteUser: async (userId, token) => {
                if (window.confirm("Are you sure you want to delete this User?")) {

                try {
                    
                    await axios.delete(`${PORT}/api/user/${userId}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    // Remove user from store after deletion
                    set((state) => ({
                        users: state.users.filter((user) => user.id !== userId),
                    }));
                } catch (err) {
                    console.log(err);
                }
            }
            },

        }),
        {
            name: "adminUserStore",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useAdminUserStore;