import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import useUserStore from "../../../stores/userStore";
import useProgramStore from "../../../stores/programStore";
import { toast } from "react-toastify";

function AdminCreatePackage() {
  const token = useUserStore((state) => state.token);
  const createProgram = useProgramStore((state) => state.createProgram);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
  });
  console.log("input", input);
  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlClearInput = () => {
    setInput({
      name: "",
      description: "",
      price: "",
    });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("firstasd")
    const { name, description, price } = input;
    if (!name?.trim() || !description?.trim() || !price?.trim()) {
    //   setIsSubmitting(false);
      return toast.error("Please fill all input");
    }
    try {
      const rs = await createProgram(input, token);
      hdlClearInput();
      toast.success("Create Program Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={hdlSubmit}>
        <div className="p-6 ml-55 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">ข้อมูลแพ็กเกจ</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p>ชื่อแพ็กเกจ</p>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={hdlChange}
                className="border p-1 rounded"
              />
            </div>
            <div>
              <p>ราคา</p>
              <input
                type="text"
                name="price"
                value={input.price}
                onChange={hdlChange}
                className="border p-1 rounded"
              />
            </div>
          </div>
        </div>

        <div className="p-6 ml-55 mt-5 bg-white rounded-lg shadow-md">
          <div className="mb-4 ">
            <h2 className="text-lg font-semibold">รายละเอียดแพ็กเกจ</h2>

            <input
              type="text"
              name="description"
              value={input.description}
              onChange={hdlChange}
              className="border p-1 rounded"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button type="submit" className="border  bg-amber-500 w-30 h-10 rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AdminCreatePackage;
