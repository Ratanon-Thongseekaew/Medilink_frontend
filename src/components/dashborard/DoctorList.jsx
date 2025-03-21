// import React from 'react'
import DoctorItem from './DoctorItem';

function DoctorList() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Doctor List</h2>
            <a href="#" className="text-teal-500">View All</a>
        </div>
        <div className="space-y-4">
          <DoctorItem name="Dr. Jaylon Stanton" specialty="Dentist" />
          <DoctorItem name="Dr. Carla Schleifer" specialty="Cardiologist" />
          <DoctorItem name="Dr. John Doe" specialty="Neurologist" />
        </div>
      </div>
    );
  }

export default DoctorList