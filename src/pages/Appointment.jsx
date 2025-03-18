import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useScheduleStore from "../stores/doctor-schedule-store";

function Appointment() {
  const { doctorId } = useParams();

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

  useEffect(() => {
    getDoctorData(doctorId);
    setMinAndMaxDate();
  }, [doctorId]);

  useEffect(() => {
    if (selectedDate) {
      getScheduleData(doctorId, selectedDate);
    }
  }, [selectedDate]);

  console.log("doctorId :>> ", doctorId);

  console.log("dayOfWeek :>> ", dayOfWeek);

  console.log("selectedDate :>> ", selectedDate);

  console.log("doctor :>> ", doctor);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* <header className="flex justify-between items-center py-4">
        <img
          src="https://storage.googleapis.com/a1aa/image/aOiOJTd1etf6ia8-uUnvJuwRjURWq_oB5y-m7yBWo9A.jpg"
          alt="MediLink International logo"
          className="h-12"
        />
      </header> */}

      <main className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-4">
          Appointment
        </h1>
        {/* <button className="bg-green-500 text-white py-2 px-4 rounded-full mx-auto block mb-6">
          นัดหมายแพทย์
        </button> */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center mb-6">
          <img
            src={doctor.profileImg}
            alt="Doctor's portrait"
            className="h-24 w-24 rounded-full mr-4"
          />
          <div>
            <h2>
              <span className="text-xl font-bold">Name : </span>
              {doctor.firstname} {doctor.lastname}
            </h2>

            <h3 className="text-md mt-2">
              <span className="text-xl font-bold">specialty :</span>
              {/* {doctor.specialty.specialtyName} */}
            </h3>
            <h3 className="mt-2">
              <span className="text-md font-bold">hospital : </span>
              {/* {doctor.hospital.name} */}
            </h3>
            <p>{}</p>

            {/* <button className="bg-green-500 text-white py-1 px-3 rounded-full mt-2">
              คุณสมบัติแพทย์
            </button> */}
          </div>
        </div>
        {/* <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <i className="fas fa-hospital text-3xl text-green-500 mb-2"></i>
            <p>ศูนย์บริการ</p>
            <p>ศูนย์บริการ, ศูนย์บริการ</p>
          </div>
          <div className="text-center">
            <i className="fas fa-stethoscope text-3xl text-green-500 mb-2"></i>
            <p>ความชำนาญเฉพาะทาง</p>
            <p>ความชำนาญเฉพาะทาง</p>
          </div>
          <div className="text-center">
            <i className="fas fa-heartbeat text-3xl text-green-500 mb-2"></i>
            <p>สุขภาพ</p>
            <p>สุขภาพ</p>
          </div>
        </div> */}
        {/* <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">เลือกโรงพยาบาล</h3>
          <div className="flex justify-around">
            <img
              src="https://storage.googleapis.com/a1aa/image/iTsQhV7AfIW7eX5IZUXPWt-vcvehHs0EpEO02n49Fk4.jpg"
              alt="Hospital 1 logo"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/tfh55EECPCA8InPncTFPygpm5G4WaOOxXJS45NvBXSs.jpg"
              alt="Hospital 2 logo"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/POGd1zq0e-1ipNjBGlRHCNaDIU8Cj-czYbEQW_pj6aw.jpg"
              alt="Hospital 3 logo"
              className="h-12"
            />
          </div>
        </div> */}
        <div className="mb-6">
          {/* <h3 className="text-lg font-bold mb-2">เลือกวันที่และเวลา</h3>
          <input
            type="date"
            className="border border-gray-300 p-2 rounded-lg w-full mb-4"
          /> */}
          <div>
            <label htmlFor="date">เลือกวันที่:</label>
            <input
              value={selectedDate}
              onChange={handleDateChange}
              className="border border-gray-300 p-2 rounded-lg w-full mb-4"
              type="date"
              id="date"
              min={minDate}
              max={maxDate}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              {/* <thead>
                <tr>
                  <th className="py-2 px-4 border-b">วันจันทร์ 13/4</th>
                  <th className="py-2 px-4 border-b">วันอังคาร 14/4</th>
                  <th className="py-2 px-4 border-b">
                    {dayOfWeek} {selectedDate}
                  </th>
                  <th className="py-2 px-4 border-b">วันพฤหัสบดี 16/4</th>
                  <th className="py-2 px-4 border-b">วันศุกร์ 17/4</th>
                </tr>
              </thead> */}
              <tbody>
                {/* <tr>
                  <td className="py-2 px-4 border-b text-center">
                    16:00 - 17:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    16:00 - 17:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    16:00 - 17:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    16:00 - 17:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    16:00 - 17:00
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-center">
                    17:00 - 18:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    17:00 - 18:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    17:00 - 18:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    17:00 - 18:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    17:00 - 18:00
                  </td>
                </tr> */}
                <tr>
                  <th className="py-2 px-4 border-b">
                    {dayOfWeek} {selectedDate}
                  </th>
                  {/* {schedule.map((el) => {
                    return (
                      <td
                        key={el.id}
                        className="py-2 px-4 border-b text-center"
                      >
                        {el.Time.startTime} - {el.Time.endTime}
                      </td>
                    );
                  })} */}
                </tr>
                {/* <tr>
                  <td className="py-2 px-4 border-b text-center">
                    19:00 - 20:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    19:00 - 20:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    19:00 - 20:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    19:00 - 20:00
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    19:00 - 20:00
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded-full mx-auto block">
          นัดหมายแพทย์
        </button>
      </main>
    </div>
  );
}

export default Appointment;
