import React from "react";

function AppointmentSuccess() {
  return (
    <div className="bg-[#E6F5F4] flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://storage.googleapis.com/a1aa/image/aKL4kgwoD-vHGBclzX3Tr7Q5DkYI8hwioGFmtKa0RCw.jpg"
            alt="MediLink logo"
            className="mr-2"
            width="50"
            height="50"
          />
          <div className="text-left">
            <h1 className="text-xl font-bold">MediLink</h1>
            <p className="text-sm text-gray-500">Your Health, Our Priority</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#00C6A2] mb-2">Appointment</h2>
        <button className="bg-[#00C6A2] text-white py-2 px-4 rounded-full mb-6">
          ยืนยันการนัดหมาย
        </button>
        <h3 className="text-xl font-bold mb-2">Thank You</h3>
        <p className="text-gray-600 mb-6">
          ขอบพระคุณที่ไว้วางใจใช้บริการของเรา
          เราจะเป็นอย่างยิ่งที่จะได้ดูแลสุขภาพของคุณตามการนัดหมายในเร็ว ๆ นี้
        </p>
        <div className="bg-[#F8F8F8] p-4 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <img
                src="https://storage.googleapis.com/a1aa/image/XlZIiCg59in3QGdWgRLsPPuBFOOUIc9568dnNelfo1I.jpg"
                alt="Doctor's image"
                className="rounded-full"
                width="80"
                height="80"
              />
            </div>
            <div className="ml-4 text-left">
              <p className="text-gray-600">วันที่และเวลานัดหมาย</p>
              <p className="text-lg font-bold">วันพุธที่ 15 กันยายน 2564</p>
              <p className="text-gray-600">เวลา 10:00 น.</p>
              <p className="text-gray-600">สถานที่: โรงพยาบาลกรุงเทพ</p>
            </div>
          </div>
          <div className="text-left">
            <p className="text-gray-600">แพทย์ผู้ดูแล</p>
            <p className="text-lg font-bold">นพ. ศักดิ์ชัย อภิรักษ์วงศ์</p>
          </div>
        </div>
        <button className="bg-[#00C6A2] text-white py-2 px-4 rounded-full">
          กลับไปที่หน้าหลัก
        </button>
      </div>
    </div>
  );
}

export default AppointmentSuccess;
