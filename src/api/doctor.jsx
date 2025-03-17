import axios from "axios";

export const actionGetAllDoctor = () => {
  return axios.get("http://localhost:8888/api/doctor/get-all-doctor-datas");
};

export const actionGetDoctorById = (doctorId) => {
  return axios.get(
    `http://localhost:8888/api/doctor/get-doctor-data-by-id/${doctorId}`
  );
};

export const actionGetScheduleByDoctorIdAndDay = (doctorId, selectedDate) =>
  axios.get(
    `http://localhost:8888/api/schedule/get-doctor-schedule/?doctorId=${doctorId}&selectedDate=${selectedDate}`
  );
