import VisaImage from "../assets/payment/visa-payment.jpg";
import PromptPay from "../assets/payment/promptpay.jpg";
import { useEffect, useState } from "react";
import useUserStore from "../stores/userStore";
import { checkOut, createOrder } from "../stores/checkoutStore";
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

function ModalPayments(props) {
  const { hdlPayments, title, actionImage, actionTitle, actionPrice, actionAppointment, programId, date, time } = props;
  const [showPayment, setShowPayment] = useState(false);
  const token = useUserStore(state => state.token);
  const [clientSecret, setClientSecret] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const stripePromise = loadStripe("pk_test_51R1NHoFWX5EVFtiE0XvV80N3RkykDsTAw3rIGsk3VHdGRPh8H9CfVUPPxVCmdgzbKJUgnsapNS9vcG4FOy7JZBbH00iEmZbJRN");

  const fetchClientSecret = async (id) => {
    try {
      const res = await checkOut(token, id);
      console.log('ClientSecret:', res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };

  const handleCreateOrder = async () => {
    try {
      const orderResponse = await createOrder(token, programId, date, time);
      console.log("Order Created:", orderResponse);
      setOrderId(orderResponse.id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const hdlConfirmation = async () => {
    setLoading(true);
    await handleCreateOrder();
    setShowPayment(true);
    setLoading(false);
  };

  useEffect(() => {
    if (orderId) {
      console.log('Fetching client secret for orderId:', orderId);
      fetchClientSecret(orderId);
    }
  }, [orderId]);

  return (
    <dialog id="modalPayments" className="modal">
      <div className="modal-box bg-white">
        <form method="dialog">
          <button
            onClick={() => setShowPayment(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button>
        </form>
        <h3 className="font-bold text-2xl text-emerald-400 text-center">Payment</h3>
        <p className="pb-2 text-center">{title}</p>

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
              <p className="text-gray-400">{date} เวลา {time}</p>
            </div>
          </div>

          {!showPayment && (
            <div className="pb-5 flex items-center justify-center">
              <button
                disabled={loading}
                onClick={hdlConfirmation}
                className="btn btn-primary text-lg p-6"
              >
                {loading ? "กำลังดำเนินการ..." : "ยืนยันการทำรายการ"}
              </button>
            </div>
          )}

          {showPayment && (
            <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold mb-4">Add Payment Method</h3>
              {clientSecret ? (
                <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                  <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
              ) : (
                <p className="text-gray-600">กำลังโหลดระบบชำระเงิน...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default ModalPayments;
