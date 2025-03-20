import VisaImage from "../assets/payment/visa-payment.jpg";
import PromptPay from "../assets/payment/promptpay.jpg";
import { useState } from "react";

function ModalPayments(props) {
  const {
    hdlPayments,
    title,
    actionImage,
    actionTitle,
    actionPrice,
    actionAppointment,
  } = props;

  const [showPayment, setShowPayment] = useState(false);

  const hdlConfirmation = () => {
    setShowPayment(true);
  };

  return (
    <dialog id="modalPayments" className="modal">
      <div className="modal-box bg-white">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => setShowPayment(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-emerald-400 text-center">
          Payment
        </h3>
        <p className="pb-2 text-center">{title}</p>
        {/* payment */}
        <div className="max-w-md mx-auto p-6 rounded-lg">
          <div className="flex items-center mb-4 border p-4 rounded-2xl">
            <div className="avatar">
              <div className="w-24 h-24 rounded-full mr-4">
                <img src={actionImage} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">{actionTitle}</h2>
              <p className="text-emerald-400 font-bold">{actionPrice}</p>
              <p className="text-gray-400 font-bold">วันที่และเวลานัดหมาย</p>
              <p className="text-gray-400">{actionAppointment}</p>
            </div>
          </div>
          <div
            className={
              showPayment
                ? "hidden pb-5 flex items-center justify-center"
                : "pb-5 flex items-center justify-center"
            }
          >
            <button
              onClick={hdlConfirmation}
              className="btn btn-primary text-lg p-6"
            >
              ยืนยันการทำรายการ
            </button>
          </div>
          {/* Payment Method */}
          <div className={showPayment ? "" : "hidden"}>
            <h3 className="text-lg font-bold mb-4">Add Payment Method</h3>
            <div className="flex space-x-4 mb-6">
              <div className="border-2 border-emerald-400 p-2 rounded-lg">
                <img
                  src={VisaImage}
                  alt="Visa and Mastercard logos"
                  className="w-24"
                />
              </div>
              <div className="border-2 border-gray-300 p-2 rounded-lg">
                <img src={PromptPay} alt="PromptPay logo" className="w-24" />
              </div>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="text-gray-700 mb-2">ข้อมูลบัตร</h4>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="w-full p-2 border rounded-lg"
                />
                <div className="flex justify-end mt-1">
                  <img
                    src="https://placehold.co/40x20"
                    alt="Visa and Mastercard logos"
                    className="w-10"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="ดด / ปป"
                  className="w-1/2 p-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2 p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="ชื่อ - นามสกุล"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <select className="w-full p-2 border rounded-lg">
                  <option>ไทย</option>
                </select>
              </div>
              <button
                onClick={hdlPayments}
                className="btn btn-secondary w-full"
              >
                ชำระเงิน
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ModalPayments;
