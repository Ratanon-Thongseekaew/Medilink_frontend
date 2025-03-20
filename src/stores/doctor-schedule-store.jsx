import { create } from "zustand";
import {
  actionGetDoctorById,
  actionGetScheduleByDoctorIdAndDay,
} from "../api/doctor";

const useScheduleStore = create((set) => ({
  doctor: {},
  actionGetDoctorDataById: async (doctorId) => {
    try {
      const rs = await actionGetDoctorById(doctorId);
      console.log("rs.data :>> ", rs.data);
      set({ doctor: rs.data });
    } catch (error) {
      console.log(error);
    }
  },
  minDate: null,
  maxDate: null,
  actionSetMinAndMaxDate: () => {
    console.log("set min max date");
    const today = new Date();

    // คำนวณวันพรุ่งนี้
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // คำนวณวันสูงสุด (พรุ่งนี้ + 90 วัน)
    const maxDateValue = new Date(tomorrow);
    maxDateValue.setDate(tomorrow.getDate() + 90);

    // แปลงวันที่เป็นรูปแบบ YYYY-MM-DD
    const formatDate = (date) => date.toISOString().split("T")[0];

    set({ minDate: formatDate(tomorrow), maxDate: formatDate(maxDateValue) });
  },
  selectedDate: "",
  dayOfWeek: "",
  actionHandleDateChange: (e) => {
    console.log("hdl date change");
    const date = e.target.value;
    set({ selectedDate: date });

    if (date) {
      const dayIndex = new Date(date).getDay(); // คืนค่า 0-6
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      set({ dayOfWeek: days[dayIndex] });
      // ดึงชื่อวันจาก array
    } else {
      set({ dayOfWeek: "" });
    }
  },
  schedule: [],
  actionGetScheduleData: async (doctorId, selectedDate) => {
    try {
      console.log("get schedule data");
      const rs = await actionGetScheduleByDoctorIdAndDay(
        doctorId,
        selectedDate
      );
      console.log("schedule data :>> ", rs.data.groupedSchedules);
      set({ schedule: rs.data.groupedSchedules });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useScheduleStore;
