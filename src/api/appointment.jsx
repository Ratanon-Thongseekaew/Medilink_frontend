import axios from "axios";
import useUserStore from "../stores/userStore";

export const createAppointment = (doctorId, data, token) => {
  return axios.post(
    `http://localhost:8888/api/appointment/create/${doctorId}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
