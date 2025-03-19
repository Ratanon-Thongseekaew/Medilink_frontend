
import { Activity, CalendarDays } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router';

function Checking() {
    const [step, setStep] = useState(1)

    // test
    const [chatReply, setChatReply] = useState(null);
    const [askReply, setAskReply] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingDoctors, setLoadingDoctors] = useState(false);
    const [formData, setFormData] = useState({
        symptom: "",
        duration: "",
        underlyingCondition: "",
        underlyingConditionStatus: "มี",
        currentAddress: "",
    });

    console.log('formData', formData)

    useEffect(() => {
        if (step === 2) {
            setLoading(true);
            fetch("http://localhost:8888/api/ai/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    setChatReply(data.chatReply)
                    setAskReply(data.askReply)
                })
                .catch((error) => {
                    console.error("Error fetching analysis:", error);
                    setChatReply("เกิดข้อผิดพลาดในการดึงข้อมูล");
                })
                .finally(() => setLoading(false));
        }
    }, [step, formData]);
    // test

    const handleNextStep = () => {
        if (step < 3) setStep(step + 1);
    };

console.log('askReply', askReply)

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
                            {index < 2 && <div className={`w-28 border-2 rounded-[30px] relative -top-12 left-24 ${step >= index + 1 ? "border-emerald-400" : "text-gray-400"}`}></div>}
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
                                            onChange={(e) => setFormData({ ...formData, symptom: e.target.value })}
                                        />
                                    </label>
                                    <label className='w-full text-left'>
                                        อาการที่เป็นอยู่ เริ่มเป็นมากี่วัน
                                        <input
                                            type="text"
                                            placeholder="อาการเริ่มมากี่วัน"
                                            className="input w-full bg-white mt-2"
                                            name="symptomsDate"
                                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        />
                                    </label>
                                </div>
                                <div className="flex gap-4 py-2">
                                    <div className="flex gap-4 py-2 w-[50%]">
                                        <label className='w-full text-left flex flex-col gap-4'>
                                            โรคประจำตัว
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="radio-1"
                                                    className="radio"
                                                    checked={formData.underlyingConditionStatus === "ไม่มี"}
                                                    onChange={() => setFormData({ ...formData, underlyingConditionStatus: "ไม่มี", underlyingCondition: "ไม่มี" })} /> ไม่มี
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="radio-1"
                                                    className="radio"
                                                    checked={formData.underlyingConditionStatus === "มี"}
                                                    onChange={() => setFormData({ ...formData, underlyingConditionStatus: "มี", underlyingCondition: "" })} /> มี
                                            </div>

                                            <div className='w-full'>
                                                <textarea
                                                    onChange={(e) => { setFormData({ ...formData, underlyingCondition: e.target.value }) }}
                                                    placeholder="โรคประจำตัว"
                                                    className={`bg-white w-full textarea textarea-md ${formData.underlyingConditionStatus === "ไม่มี" ? "hidden" : ""
                                                        } `}
                                                    disabled={formData.underlyingConditionStatus === "ไม่มี"}
                                                    value={formData.underlyingCondition}
                                                />

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
                                                onChange={(e) => setFormData({ ...formData, currentAddress: e.target.value })}
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
                                    {loading ? (
                                        <p className="mt-4 text-gray-600">ระบบกำลังวิเคราะห์อาการของคุณ โปรดรอสักครู่...</p>
                                    ) : (
                                        <div className="mt-4 space-y-6">
                                            {chatReply
                                                ?.split("###") // แยกหัวข้อ
                                                .map((section) => section.trim()) // ล้างช่องว่างที่ไม่จำเป็น
                                                .filter((section) => section !== "") // กรองหัวข้อว่าง
                                                .map((section, index) => {
                                                    const lines = section.split("\n").map((line) => line.trim()); // แยกแต่ละบรรทัด
                                                    const title = lines.shift(); // หัวข้อของหมวดหมู่

                                                    return (
                                                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-400 text-left">
                                                            <h3 className="text-xl font-semibold text-emerald-500">{title}</h3>
                                                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                                                {lines.map((item, idx) => (
                                                                    <li key={idx}>{item.replace(/^\d+\.\s*/, "")}</li> // 🔥 ลบตัวเลขนำหน้าออก
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={handleNextStep}
                                    className='btn btn-secondary text-lg py-6 px-6'
                                >
                                    นัดหมายแพทย์ หรือดูแพ็กเกจ
                                </button>
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
                                            {askReply?.doctors.map((doctor, index) => (
                                                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center relative">
                                                    <img
                                                        src={ doctor.profileImg || "https://storage.googleapis.com/a1aa/image/gYnAGT5JDiknG7fw-wgHoEy_AIVIpIIClbFhKn0wqLI.jpg"}
                                                        alt="Doctor Image"
                                                        className="mx-auto mb-4 rounded-full"
                                                        width="100"
                                                        height="100"
                                                    />
                                                    <h4 className="text-lg font-bold text-gray-800 mb-2">{`นพ. ${doctor.firstname} ${doctor.lastname}`}</h4>
                                                    <p className="text-sm text-gray-400 mb-4">{`${doctor.specialty}`}</p>
                                                    <span className="bg-emerald-400 text-white py-1 px-3 rounded-full text-sm">
                                                    {doctor.hospital}
                                                    </span>
                                                    <div className="mt-12">
                                                        <Link to={`appointment/${doctor.id}`} className="bg-gray-100 text-gray-600 py-2 rounded-b-lg text-sm w-full absolute bottom-0 left-0 flex gap-2 justify-center items-center h-10 hover:bg-emerald-400 hover:text-white">
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
                                        {askReply?.packages.map((pkg, index) => (
                                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                                <img
                                                    src={pkg.profileImg||"https://storage.googleapis.com/a1aa/image/l5D5rsvM1EJdVjafaNuE_7OM7UDEXQLi7lwuSMFX71A.jpg"}
                                                    alt="Package Image"
                                                    className="w-full h-40 object-cover mb-4 rounded-lg"
                                                    width="300"
                                                    height="200"
                                                />
                                                <h4 className="text-left text-lg font-bold mb-2 text-[#AF9763]">{pkg.name}</h4>
                                                <p className="text-left text-sm text-gray-500 mb-4">
                                                    {pkg.description}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-bold text-emerald-400">{pkg.price}</span>
                                                    <Link to={`/package/${pkg.id}`} className="btn btn-primary">
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