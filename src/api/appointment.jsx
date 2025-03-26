import axios from "axios";
import useUserStore from "../stores/userStore";

export const createAppointment = async (doctorId, data, token) => {
  const rs = await axios.post(
    `http://localhost:8888/api/appointment/create/${doctorId}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return rs
};


export const getAppointment = async(appoitnmentId, token)=>{
  try {
    const rs = await axios.get()
  } catch (error) {
    console.log(error)
  }
}