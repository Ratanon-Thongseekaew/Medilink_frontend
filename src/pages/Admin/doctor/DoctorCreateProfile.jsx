import { ChevronDown, Clock, HospitalIcon } from "lucide-react";
import React, { useState } from "react";
import useUserStore from "../../../stores/userStore";
import { toast } from "react-toastify";
import useAdminDoctorStore from "../../../stores/AdminDoctorStore";
import useAdminHospitalStore from "../../../stores/AdminHospitalStore";
import Addpicture from "./AddPicture";

function DoctorCreateProfile() {
  const token = useUserStore((state) => state.token);
  const specialty = useAdminDoctorStore((state) => state.specialty);
  const hospital = useAdminHospitalStore((state) => state.hospital);
  const createDoctor = useAdminDoctorStore((state=>state.createDoctor))

  const [file,setFile] = useState(null)
  const [input, setInput] = useState({
    firstname:"",
    lastname:"",
    specialtyId:"",
    hospitalId:"",
    experience:"",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlClearInput = () => {
    setInput({
      firstname: "",
      lastname: "",
      speacialtyId: "",
      hospitalId: "",
      experience: "",
    });
  };
  const hdlSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
    const {firstname,lastname,specialtyId,hospitalId,experience} =input
      const body = new FormData()
    body.append("firstname" ,firstname)
    body.append("lastname",lastname)
    body.append("specialtyId",specialtyId)
    body.append("hospitalId",hospitalId)
    body.append("experience",experience)
if(file){
  body.append("profileImg", file)
}
      const rs = await createDoctor(body, token);
      hdlClearInput();
      toast.success("Create Doctor Successfully");
    } catch (error) {
      console.log(error);
   
    }
  };

  return (
    <div className="p-4 ml-50">
      <form onSubmit={hdlSubmit}>
        <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Doctor"
            className="rounded-full w-20 h-20 mr-4"
          />
          <Addpicture file={file} setFile={setFile}/>
        </div>
        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="flex">
            <h2 className="text-lg font-bold mb-2">Personal Information</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Name</p>
              <input
                type="text"
                name="firstname"
                placeholder="firstname"
                onChange={hdlChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <p>lastname</p>
              <input
                type="text"
                placeholder="lastname"
                name="lastname"
                onChange={hdlChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <p>experience</p>
              <input
                type="text"
                name="experience"
                placeholder="experience"
                onChange={hdlChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <p>hospital</p>
              <select
                name="hospitalId"
                onChange={hdlChange}
                className="border p-1 rounded"
              >
                {hospital.map((spt, index) => {
                  console.log("spt", spt);
                  return <option value={spt.id}>{spt.name}</option>;
                })}
              </select>
            </div>
            <div>
              <p>Speacialists</p>
              <select
                name="specialtyId"
                onChange={hdlChange}
                className="border p-1 rounded"
              >
                {specialty.map((spt, index) => {
                  console.log("spt", spt);
                  return <option value={spt.id}>{spt.specialtyName}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border  bg-amber-500 w-30 h-10 rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorCreateProfile;
