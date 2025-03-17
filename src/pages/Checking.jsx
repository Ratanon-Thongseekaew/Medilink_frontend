
import { Activity, CalendarDays } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router';

function Checking() {
    const [step, setStep] = useState(1)

    const handleNextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    return (
        <div className='mx-auto container px-4 sm:px-6 lg:px-8 pb-16 text-center'>
            <div className='w-full flex justify-center'>
                <div>
                    <div className='flex gap-2'>
                        <Activity className='w-8 h-8 stroke-emerald-400' />
                        <h1 className='text-4xl text-emerald-400 font-semibold'>Checking</h1>
                    </div>
                    <div className='font-semibold my-2 bg-emerald-400 text-white py-2 flex w-[220px] text-lg rounded-lg justify-center'>
                        ตรวจสอบอาการเบื้องต้น
                    </div>
                </div>
            </div>
            {/* Step Progress  */}
            <div className="w-full flex justify-center">
                <div className="py-6 flex gap-8">
                    {["คัดกรอง", "วิเคราะห์อาการ", "นัดหมายแพทย์ หรือแพ็กเกจ"].map((text, index) => (
                        <div key={index} className="flex flex-col items-center w-[160px] relative">
                            <div
                                className={`flex justify-center items-center p-4 rounded-full w-8 h-8 text-white ${step >= index + 1 ? "bg-emerald-400" : "bg-gray-300"
                                    }`}
                            >
                                {index + 1}
                            </div>
                            <p className={`mt-2 text-sm ${step >= index + 1 ? "text-emerald-400" : "text-gray-400"}`}>{text}</p>
                            {index < 2 && <div className="w-28 border-2 rounded-[30px] relative -top-12 left-24"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="p-4 md:px-10 lg:px-20 xl:px-[120px]">
                    <form>
                        {step === 1 && (
                            <>
                                <div className="flex gap-4 py-2 items-start ">
                                    <label className='w-full text-left'>
                                        วันนี้คุณมีอาการอย่างไร
                                        <input
                                            type="text"
                                            placeholder="อาการเบื้องต้น"
                                            className="input w-full bg-white mt-2"
                                            name="symptoms"
                                        />
                                    </label>
                                    <label className='w-full text-left'>
                                        อาการที่เป็นอยู่ เริ่มเป็นมากี่วัน
                                        <input
                                            type="text"
                                            placeholder="อาการเริ่มมากี่วัน"
                                            className="input w-full bg-white mt-2"
                                            name="symptomsDate"
                                        />
                                    </label>
                                </div>
                                <div className="flex gap-4 py-2">
                                    <div className="flex gap-4 py-2 w-[50%]">
                                        <label className='w-full text-left flex flex-col gap-4'>
                                            โรคประจำตัว
                                            <div>
                                                <input type="radio" name="radio-1" className="radio" defaultChecked /> มี
                                            </div>
                                            <div>
                                                <input type="radio" name="radio-1" className="radio" /> ไม่มี
                                            </div>
                                            <div className='w-full'>
                                                <textarea placeholder="โรคประจำตัว" className="bg-white w-full textarea textarea-md" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className='flex flex-col gap-4 py-2 items-start w-[50%]'>
                                        <label className='w-full text-left'>
                                            ที่อยู่หรือปัจจุบันท่านอยู่ที่ไหน
                                            <input
                                                type="text"
                                                placeholder="แจ้งที่อยู่ปัจจุบันของท่าน"
                                                className="input w-full bg-white mt-2"
                                                name="phone"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-6"></div>
                                <button
                                    onClick={handleNextStep}
                                    className='btn btn-secondary text-lg py-6 px-6'
                                >วิเคราะห์อาการเบื้องต้น</button>
                            </>
                        )}
                        {step === 2 && (
                            <div className="p-6 md:px-10 lg:px-20 xl:px-32">
                                <div className='pb-8'>
                                    <h2 className="text-2xl font-semibold text-emerald-500">ผลวิเคราะห์อาการ</h2>
                                    <p className="mt-4 text-gray-600">ระบบกำลังวิเคราะห์อาการของคุณ โปรดรอสักครู่...</p>
                                </div>
                                <button
                                    onClick={handleNextStep}
                                    className='btn btn-secondary text-lg py-6 px-6'
                                >นัดหมายแพทย์ หรือดูแพ็กเกจ</button>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="">
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        แพทย์ที่เรา <span className="text-emerald-400">แนะนำ</span>
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {/* Doctor Card */}
                                        {Array(6).fill().map((_, index) => (
                                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center relative">
                                                <img
                                                    src="https://storage.googleapis.com/a1aa/image/gYnAGT5JDiknG7fw-wgHoEy_AIVIpIIClbFhKn0wqLI.jpg"
                                                    alt="Doctor Image"
                                                    className="mx-auto mb-4 rounded-full"
                                                    width="100"
                                                    height="100"
                                                />
                                                <h4 className="text-lg font-bold text-gray-800 mb-2">นพ. ทาโนะ เดอะโชควีวัฒน์</h4>
                                                <p className="text-sm text-gray-400 mb-4">อายุรศาสตร์</p>
                                                <span className="bg-emerald-400 text-white py-1 px-3 rounded-full text-sm">
                                                    อายุรศาสตร์โรคไต
                                                </span>
                                                <div className="mt-12">
                                                    <Link to="/appointment" className="bg-gray-100 text-gray-600 py-2 rounded-b-lg text-sm w-full absolute bottom-0 left-0 flex gap-2 justify-center items-center h-10 hover:bg-emerald-400 hover:text-white">
                                                        <CalendarDays className='w-5 h-5' />
                                                        นัดหมาย
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Recommended Packages */}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        แพ็กเกจที่เรา <span className="text-emerald-400">แนะนำ</span>
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {/* Package Card */}
                                        {Array(6).fill().map((_, index) => (
                                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                                <img
                                                    src="https://storage.googleapis.com/a1aa/image/l5D5rsvM1EJdVjafaNuE_7OM7UDEXQLi7lwuSMFX71A.jpg"
                                                    alt="Package Image"
                                                    className="w-full h-40 object-cover mb-4 rounded-lg"
                                                    width="300"
                                                    height="200"
                                                />
                                                <h4 className="text-left text-lg font-bold mb-2 text-[#AF9763]">แพ็กเกจตรวจหัวใจและหลอดเลือด</h4>
                                                <p className="text-left text-sm text-gray-500 mb-4">
                                                    ตรวจสุขภาพหัวใจ คัดกรองโรคหัวใจและหลอดเลือดเบื้องต้น
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-bold text-emerald-400">12,000 บาท</span>
                                                    <Link to="/package" className="btn btn-primary">
                                                        ซื้อแพ็กเกจ
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checking