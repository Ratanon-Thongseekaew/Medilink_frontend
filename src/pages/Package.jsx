import { ChevronLeft, ShoppingBasket } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import ModalPayments from "../components/ModalPayments";
import useProgramStore from "../stores/programStore";
import useUserStore from "../stores/userStore";
import { useEffect, useState } from "react";

function Package() {
  const navigate = useNavigate();
  const token = useUserStore((state) => state.token);
  const fetchProgram = useProgramStore((state) => state.fetchProgram);
  const program = useProgramStore((state) => state.program);
  const { id } = useParams();
  const hdlPayments = () => {
    navigate("/thankyou-package");
  };

  useEffect(() => {
    fetchProgram(token, id);
  }, [id]);
  console.log(program);
  return (
    <>
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="p-6">
          <Link
            className="bg-white border rounded-full w-11 h-11 flex justify-center items-center"
            to="/login"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <div>
            <div className="flex gap-2">
              <ShoppingBasket className="w-8 h-8 stroke-emerald-400" />
              <h1 className="text-4xl text-emerald-400 font-semibold">
                Online Package
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-semibold my-2 bg-emerald-400 text-white py-2 flex w-[220px] text-lg rounded-lg justify-center">
                ซื้อแพ็กเกจออนไลน์
              </div>
            </div>
          </div>
        </div>

        {/* นัดหมาย */}
        <div className="w-full py-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src={program?.profileImg}
                alt={program?.name}
                className="rounded-lg mb-4 lg:mb-0"
                width="600"
                height="400"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-6 text-left">
              <h3 className="text-left text-2xl font-bold text-gray-700 mb-2">
                {program?.name}
              </h3>
              <p className="text-gray-600 mb-4">{program?.description}</p>
              <p className="text-3xl font-bold text-emerald-400 mb-4">
                {program?.price.toLocaleString()} บาท
              </p>
            
              <div className="bg-gray-100 p-4 rounded-lg border mt-6 bg-white">
              <h4 className="text-xl font-bold mb-4">ซื้อแพ็กเกจและโปรแกรม <br/><span className='text-emerald-400'>นัดหมายเข้ารับบริการ</span></h4>
                <label className="block mb-2 text-gray-600">
                  วันที่เข้ารับบริการ
                </label>
                <input
                  type="date"
                  className="w-full p-2 mb-4 border rounded-lg"
                />
                <label className="block mb-2 text-gray-600">
                  เวลาที่ต้องการใช้บริการ
                </label>
                <input
                  type="time"
                  className="w-full p-2 mb-4 border rounded-lg"
                />
                <button
                  onClick={() =>
                    document.getElementById("modalPayments").showModal()
                  }
                  className="btn btn-secondary text-lg py-6 px-6 w-full"
                >
                  นัดหมายเข้าใช้บริการ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalPayments
        hdlPayments={hdlPayments}
        title="แพ็กเกจออนไลน์"
        actionImage={program?.profileImg}
        actionTitle={program?.name}
        actionPrice={program?.price.toLocaleString()}
        actionAppointment="18 มีนาคม 2568 เวลา 18.00 - 19.00"
      />
    </>
  );
}

export default Package;
