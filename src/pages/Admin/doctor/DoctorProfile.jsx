import { Clock, FilePenLine, HospitalIcon, UserPenIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useUserStore from "../../../stores/userStore";
import useAdminDoctorStore from "../../../stores/AdminDoctorStore";
import Addpicture from "./AddPicture";

function DoctorProfile() {
  const { id } = useParams();
  const token = useUserStore((state) => state.token);
  const fetchDoctorById = useAdminDoctorStore((state) => state.fetchDoctorById);
  const doctorById = useAdminDoctorStore((state) => state.doctorById);
  const updateDoctor = useAdminDoctorStore((state) => state.updateDoctor);
  const fetchSpecialty = useAdminDoctorStore((state) => state.fetchSpecialty);
  const specialty = useAdminDoctorStore((state) => state.specialty);


  const [file,setFile] = useState(null)
  const [doctorData, setDoctorData] = useState({
    specialty: "",
    experience: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchDoctorById(id, token);
    fetchSpecialty(token);
  }, []);

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const hdlUpdate = async () => {
    try {
      const {specialty,experience} =doctorData
      const body = new FormData()
    body.append("specialty" ,specialty)
    body.append("experience",experience)
if(file){
  body.append("profileImg", file)
}
      if (id) {
        await updateDoctor(id, token, body);
        setIsEditing(false);
        fetchDoctorById(id, token)
      }
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className="p-4 pl-70 pr-8 w-full">
      <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-20 h-20 mr-4"
        />
        <Addpicture file={file} setFile={setFile}/>
        <div className="flex-1 min-w-0">
          <p className="text-xl whitespace-nowrap"> {doctorById.firstname} {doctorById.lastname}</p>
          <p className="text-gray-500 whitespace-nowrap">{doctorById.specialty.specialtyName}</p>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <div className="flex">
          <h2 className="text-lg font-bold mb-2">Personal Information</h2>
          <UserPenIcon
            className="w-8 h-8  text-amber-500 ml-260"
            onClick={() => setIsEditing(true)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Name</p>
            <p>
              {doctorById.firstname} {doctorById.lastname}
            </p>
          </div>
          
              <div>
                <p>specialty</p>
                {isEditing ? (
                  <select
                    name="specialty"
                    onChange={hdlChange}
                    className="border p-1 rounded"
                  >
                    {specialty.map((spt, index) => {
            return (<option value={spt.id}>{spt.specialtyName}</option>)})}
                    
                  </select>
                ) : (
                  <p>{doctorById.specialty.specialtyName}</p>
                )}
              </div>
          <div>
            <p> experience</p>
            {isEditing ? (
              <input
                type="text"
                name="experience"
                defaultValue={doctorById.experience || ""}
                onChange={hdlChange}
                className="border p-1 rounded"
              />
            ) : (
              <p>{doctorById.experience}</p>
            )}
          </div>
        </div>
      </div>

    <button className="bg-amber-500 w-30 h-10 rounded-md text-white ml-100"
    onClick={hdlUpdate}> Update </button>
      {/* Calendar wrap */}
      <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-[auto_1fr_auto] gap-4">
        <div className="flex flex-col items-center">
          <div className="text-gray-500">Thu</div>
          <div className="bg-gray-200 text-xl font-semibold rounded-md px-2 py-1">
            15
          </div>
        </div>

        <div className="flex  items-center">
          <div className="flex flex-col items-center text-gray-700">
            <div className="flex gap-2">
              <Clock className="w-5 ml-2" />
              <span>09:00am - 09:30am</span>
            </div>
            <div className="flex gap-2 mt-4">
              <HospitalIcon className="w-5" />
              <span>โรงพยาบาลกรุงเทพ</span>
            </div>
          </div>
        </div>

        <FilePenLine className="w-8 h-8  text-amber-500" />
      </div>
    </div>
  );
}

export default DoctorProfile;
