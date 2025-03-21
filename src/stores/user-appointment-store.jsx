import { create } from "zustand";
import { createAppointment } from "../api/appointment";

const useAppointmentStore = create((set, get) => ({
  timeBox: {
    doctorScheduleId: null,
    doctorOvertimeId: null,
    startTime: "null",
    endTime: "null",
  },
  selectedDate: "",
  appointmentData: {},
  hdlTimeboxChange: (timeSlot, date) => {
    console.log("timeSlot :>> ", timeSlot);
    set({ timeBox: timeSlot, selectedDate: date });
  },
  // hdlCreateAppointment: (doctorId, timeBox, selectedDate) => {
  //   createAppointment(doctorId, { ...timeBox, selectedDate });
  // },
  hdlCreateAppointment: (doctorId, token) => {
    const timeBox = get().timeBox;
    const selectedDate = get().selectedDate;
    createAppointment(doctorId, { ...timeBox, selectedDate }, token);
  },
}));

export default useAppointmentStore;
