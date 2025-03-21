import { CalendarDays, ChevronLeft, Gem, Hospital, Split } from "lucide-react";
import { Link, useNavigate } from "react-router";
import BangkokHospital from "../assets/hospital/bangkok-hospital.jpg";
import ModalPayments from "../components/ModalPayments";
//pheem
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useScheduleStore from "../stores/doctor-schedule-store";
import useAppointmentStore from "../stores/user-appointment-store";
import { changeDayLanguage } from "../Utils/changeDayLanguage";
import useUserStore from "../stores/userStore";

function Appointment() {
  const { doctorId } = useParams();

  const token = useUserStore((state) => state.token);

  const navigate = useNavigate();

  const hdlPayments = (doctorId, token) => {
    hdlCreateAppointment(doctorId, token);
    navigate("/thankyou-appointment");
  };

  const {
    doctor,
    actionGetDoctorDataById: getDoctorData,
    minDate,
    maxDate,
    actionSetMinAndMaxDate: setMinAndMaxDate,
    selectedDate,
    dayOfWeek,
    actionHandleDateChange: handleDateChange,
    schedule,
    actionGetScheduleData: getScheduleData,
  } = useScheduleStore();

  const {
    timeBox,
    hdlTimeboxChange,
    selectedDate: selectedAppointDate,
    hdlCreateAppointment,
  } = useAppointmentStore();

  useEffect(() => {
    getDoctorData(doctorId, token);
    setMinAndMaxDate();
  }, [doctorId]);

  useEffect(() => {
    if (selectedDate) {
      getScheduleData(doctorId, selectedDate);
    }
  }, [selectedDate]);

  const days = Object.keys(schedule);
  console.log("days :>> ", days);

  //new Date(12-03)

  // groupedSchedules : {
  // "MONDAY 12 March" : [],
  // "TUESDAY 13 March : []
  // }
  // Object.keys( groupedSchedules) -->["MONDAY 11 March", "TUESDAY"]

  const dayswithdates = days;

  // console.log("doctorId :>> ", doctorId);

  // console.log("dayOfWeek :>> ", dayOfWeek);

  // console.log("selectedDate :>> ", selectedDate);

  // console.log("doctor :>> ", doctor);

  console.log("timeBox :>> ", timeBox);

  return (
    <>
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="p-6">
          <Link
            className="bg-white border rounded-full w-11 h-11 flex justify-center items-center"
            to="/login"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <div>
            <div className="flex gap-2">
              <CalendarDays className="w-8 h-8 stroke-emerald-400" />
              <h1 className="text-4xl text-emerald-400 font-semibold">
                Appointment
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-semibold my-2 bg-emerald-400 text-white py-2 flex w-[220px] text-lg rounded-lg justify-center">
                นัดหมายแพทย์
              </div>
            </div>
          </div>
        </div>

        {/* นัดหมาย */}
        <div className="max-w-5xl mx-auto py-6">
          <div className="flex p-10 mb-10 items-center justify-between rounded-lg shadow-[0px_4px_4px_#0000000d] bg-white">
            <div className="text-left">
              <h3 className="text-3xl font-bold">
                {doctor.firstname} {doctor.lastname}
              </h3>
              <div className="border-4 border-emerald-400 my-3 rounded-2xl"></div>
              <p className="text-gray-400 my-2 font-semibold">
                {doctor?.specialty?.specialtyName}
              </p>
              <p className="text-center py-2 bg-emerald-400 text-white rounded-2xl w-40">
                {doctor?.hospital?.name}
              </p>
            </div>
            <div className="avatar">
              <div className="w-36 rounded-full">
                <img src={doctor?.profileImg} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 bg-white p-10 rounded-lg shadow-[0px_4px_4px_#0000000d]">
            <div className="flex flex-col items-start gap-1 px-4 border-r-2">
              <Hospital className="w-10 h-10 stroke-1 stroke-emerald-400 mb-4" />
              <p className="font-bold">ศูนย์เฉพาะคลินิก</p>
              <p className="text-gray-400">ศูนย์โรคไต, ศูนย์เบาหวาน</p>
            </div>
            <div className="flex flex-col items-start gap-1 px-4 border-r-2">
              <Gem className="w-10 h-10 stroke-1 stroke-emerald-400 mb-4" />
              <p className="font-bold">ความชำนาญเฉพาะทางเฉพาะ</p>
              <p className="text-gray-400">อายุรศาสตร์</p>
            </div>
            <div className="flex flex-col items-start gap-1 px-4">
              <Split className="w-10 h-10 stroke-1 stroke-emerald-400 mb-4" />
              <p className="font-bold">อนุสาขา</p>
              <p className="text-gray-400">อายุรศาสตร์โรคไต</p>
            </div>
          </div>
          <div className="mb-6 py-8">
            <h3 className="text-left text-xl font-bold mb-4">
              โรงพยาบาลในสังกัด
            </h3>
            <div className="flex justify-normal gap-4">
              <img
                src={BangkokHospital}
                alt="Bangkok Hospital logo"
                className="rounded-full border w-24 h-24"
              />
            </div>
          </div>
          <div className="mb-6 py-8">
            <h3 className="text-center text-xl font-bold mb-4">
              เลือกวันที่และเวลานัดหมายแพทย์
            </h3>
            <div className="flex items-center mx-auto mb-6 max-w-sm">
              <input
                value={selectedDate}
                onChange={handleDateChange}
                type="date"
                id="date"
                min={minDate}
                max={maxDate}
                className="border border-gray-300 bg-white rounded-lg p-2 w-full"
              />
              <i className="fas fa-calendar-alt text-gray-500 ml-2"></i>
            </div>
            <div className="grid grid-cols-5 text-center">
              {schedule.map((el) => {
                const date = new Date(el.date).toISOString().split("T")[0];
                return (
                  <div className="bg-emerald-400 text-white p-2">
                    {changeDayLanguage(el.day)} <br /> {date}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-5 text-center">
              {schedule.map((el) => {
                return (
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                      {selectedAppointDate === el.date
                        ? `${timeBox.startTime} - ${timeBox.endTime}`
                        : "00:00 - 01:00"}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      {el.timeBox.map((timeSlot) => {
                        return (
                          <li
                            onClick={() => hdlTimeboxChange(timeSlot, el.date)}
                          >
                            {timeSlot.startTime} - {timeSlot.endTime}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  // <div className="border border-gray-300 p-2">
                  //   <select
                  //     defaultValue="Pick a color"
                  //     className="select bg-white"
                  //     onChange={(e) =>
                  //       hdlTimeboxChange(e.target.value, el.date)
                  //     }
                  //   >
                  //     {el.timeBox.map((timeSlot) => {
                  //       return (
                  //         <option
                  //           // onChange={() => hdlTimeboxChange(timeSlot, el.date)}
                  //         >
                  //           {timeSlot.startTime} - {timeSlot.endTime}
                  //         </option>
                  //       );
                  //     })}
                  //   </select>
                  // </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-secondary text-lg py-6 px-6"
              onClick={() =>
                document.getElementById("modalPayments").showModal()
              }
            >
              นัดหมายแพทย์
            </button>
          </div>
        </div>
      </div>
      {/* modal */}
      <ModalPayments
        hdlPayments={() => hdlPayments(doctorId, token)}
        title="นัดหมายแพทย์"
        actionImage="https://storage.googleapis.com/a1aa/image/IXKSkIDsLwXnpPpPgnoPxy88Dv6JD6FNoaxrsbGEOEI.jpg"
        actionTitle="นพ. มาโนช เตชะโชควัฒน์"
        actionPrice="100 บาท"
        actionAppointment={`${selectedAppointDate} เวลา ${timeBox.startTime} - ${timeBox.endTime}`}
      />
    </>
  );
}

export default Appointment;
