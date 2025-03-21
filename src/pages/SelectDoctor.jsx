import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { actionGetAllDoctor } from "../api/doctor";

function SelectDoctor() {
  const [doctors, setDoctor] = useState([]);

  const getAllDoctor = async () => {
    try {
      const doctorDatas = await actionGetAllDoctor();
      console.log(doctorDatas.data.doctorDatas);
      setDoctor(doctorDatas.data.doctorDatas);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("doctor :>> ", doctors);

  useEffect(() => {
    getAllDoctor();
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/RWIB2mKoRv4xi61lwgOSYijS06HLYDqfdUZtNZc_NH8.jpg"
            alt="MediLink logo"
            className="h-12 w-12"
          />
          <div className="ml-2">
            <h1 className="text-xl font-bold text-gray-800">MediLink</h1>
            <p className="text-sm text-gray-600">Your Health Companion</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-teal-500">Checking</h2>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 mx-2 text-white bg-teal-500 rounded-full">
              All
            </button>
            <button className="px-4 py-2 mx-2 text-gray-600 bg-gray-200 rounded-full">
              Available
            </button>
            <button className="px-4 py-2 mx-2 text-gray-600 bg-gray-200 rounded-full">
              Unavailable
            </button>
          </div>
        </section>
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800">
            แพทย์ที่เรา <span className="text-teal-500">แนะนำ</span>
          </h3>
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="p-4 bg-white rounded-lg shadow-md"
              >
                <img
                  src={doctor.image}
                  alt="Doctor's portrait"
                  className="mx-auto rounded-full"
                  height="150"
                  width="150"
                />
                <h4 className="mt-4 text-lg font-bold text-center text-gray-800">
                  {doctor.firstname} {doctor.lastname}
                </h4>
                <p className="mt-2 text-center text-gray-600">
                  {doctor.specialty.specialtyName}
                </p>
                <p className="mt-2 text-center text-gray-600">
                  {doctor.hospital.name}
                </p>
                <div className="flex justify-center mt-4">
                  <Link to={`/appointment/${doctor.id}`}>
                    <button className="px-4 py-2 text-white bg-teal-500 rounded-full hover:cursor-pointer">
                      ดูรายละเอียด
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SelectDoctor;
