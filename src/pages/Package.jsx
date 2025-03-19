import { ChevronLeft, ShoppingBasket } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import ModalPayments from '../components/ModalPayments'

function Package() {
    const navigate = useNavigate()

    const hdlPayments = () => {
        navigate("/thankyou-package")
    }
    return (
        <>
        <div className='mx-auto container px-4 sm:px-6 lg:px-8 pb-16 text-center'>
            <div className="p-6">
                <Link className="bg-white border rounded-full w-11 h-11 flex justify-center items-center" to="/login">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
            </div>
            <div className='w-full flex justify-center'>
                <div>
                    <div className='flex gap-2'>
                        <ShoppingBasket className='w-8 h-8 stroke-emerald-400' />
                        <h1 className='text-4xl text-emerald-400 font-semibold'>Online Package</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='font-semibold my-2 bg-emerald-400 text-white py-2 flex w-[220px] text-lg rounded-lg justify-center'>
                            ซื้อแพ็กเกจออนไลน์
                        </div>
                    </div>
                </div>

            </div>

            {/* นัดหมาย */}
            <div className="w-full py-6 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                            <img src="https://storage.googleapis.com/a1aa/image/RIXFgoqmD1i4kk97B7Ap1-vLiqzlWl-j--_Mlkj7H9Q.jpg" alt="Doctor consulting with a patient" className="rounded-lg mb-4 lg:mb-0" width="600" height="400" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-6 text-left">
                            <h3 className="text-left text-2xl font-bold text-gray-700 mb-2">แพ็กเกจตรวจสุขภาพพื้นฐาน และทั่วไป</h3>
                            <p className="text-gray-600 mb-4">
                                การตรวจสุขภาพเป็นสิ่งสำคัญที่ช่วยให้คุณสามารถติดตามความสุขภาพของตนเองได้อย่างต่อเนื่อง แพ็กเกจตรวจสุขภาพพื้นฐานและทั่วไปช่วยให้คุณตรวจสอบสุขภาพครอบคลุมตรวจสำคัญไปพร้อมกับการดูแลสุขภาพโดยรวมตามมาตรฐานสากล
                            </p>
                            <p className="text-3xl font-bold text-emerald-400 mb-4">8,000 บาท</p>
                            <div className="p-4 rounded-lg border mt-6 bg-white">
                                <h4 className="text-xl font-bold mb-4">ซื้อแพ็กเกจและโปรแกรม <br/><span className='text-emerald-400'>นัดหมายเข้ารับบริการ</span></h4>
                                <label className="block mb-2 text-gray-600">วันที่เข้ารับบริการ</label>
                                <input type="date" className="w-full p-2 mb-4 border rounded-lg" />
                                <label className="block mb-2 text-gray-600">เวลาที่ต้องการใช้บริการ</label>
                                <input type="time" className="w-full p-2 mb-4 border rounded-lg" />
                                <button 
                                    onClick={()=>document.getElementById('modalPayments').showModal()}
                                    className="btn btn-secondary text-lg py-6 px-6 w-full"
                                >นัดหมายเข้าใช้บริการ</button>
                            </div>
                        </div>
                    </div>
                    {/* <section className="mt-8 text-left">
                        <h3 className="text-2xl font-bold text-gray-700 mb-4">รายละเอียด</h3>
                        <h4 className="text-xl font-bold text-emerald-400 mb-2">รายการตรวจสุขภาพในแพ็กเกจนี้ประกอบด้วย</h4>
                        <ul className="list-disc list-inside text-gray-600 pl-4">
                            <li>ตรวจความสมบูรณ์ของเม็ดเลือด (Complete Blood Count: CBC)</li>
                            <li>ตรวจระดับน้ำตาลในเลือด (Fasting Blood Sugar: FBS)</li>
                            <li>ตรวจการทำงานของไตและตับ</li>
                            <li>ตรวจระดับไขมันในเลือด (Cholesterol, Triglyceride, HDL, LDL)</li>
                            <li>ตรวจปัสสาวะและการทำงานของระบบขับถ่าย</li>
                            <li>ตรวจเอ็กซเรย์ปอด (Chest X-ray)</li>
                            <li>ตรวจคลื่นไฟฟ้าหัวใจ (Electrocardiogram: EKG)</li>
                        </ul>
                    </section> */}
            </div>
        </div>
        <ModalPayments
            hdlPayments={hdlPayments}
            title="แพ็กเกจออนไลน์"
            actionImage="https://storage.googleapis.com/a1aa/image/RIXFgoqmD1i4kk97B7Ap1-vLiqzlWl-j--_Mlkj7H9Q.jpg"
            actionTitle="แพ็กเกจตรวจสุขภาพพื้นฐาน และทั่วไป"
            actionPrice="8,000 บาท"
            actionAppointment="18 มีนาคม 2568 เวลา 18.00 - 19.00"
        />
        </>
    )
}

export default Package