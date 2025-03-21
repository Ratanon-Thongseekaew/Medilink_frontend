import axios from "axios";
import useUserStore from "../stores/userStore";

export const actionGetAllDoctor = () => {
  return axios.get("http://localhost:8888/api/doctor/get-all-doctor-datas");
};

export const actionGetDoctorById = (id, token) => {
  return axios.get(`http://localhost:8888/api/doctor/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const actionGetScheduleByDoctorIdAndDay = (doctorId, selectedDate) =>
  axios.get(
    `http://localhost:8888/api/schedule/get-doctor-schedule/?doctorId=${doctorId}&selectedDate=${selectedDate}`
  );
