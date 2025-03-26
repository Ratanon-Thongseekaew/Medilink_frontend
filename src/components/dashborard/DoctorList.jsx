// import React from 'react'
import DoctorItem from './DoctorItem';

function DoctorList() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Doctor List</h2>
            <a href="/admin/doctor-manage" className="text-teal-500">View All</a>
        </div>
        <div className="space-y-4">
          <DoctorItem image="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-4_gel7vc.jpg" name="นพ. สมชาย พานิช" specialty="โรคหัวใจ" />
          <DoctorItem image="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/doctor-1_ptalux.jpg" name="พญ. ณัฐชา สมิธ" specialty="โรคประสาท" />
          <DoctorItem image="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-6_hzxohp.jpg" name="นพ. ไมเคิล พงษ์ประทีป" specialty="ศัลยกรรมกระดูกและข้อ" />
        </div>
      </div>
    );
  }

export default DoctorList