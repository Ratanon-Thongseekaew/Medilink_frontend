import { Calendar, Clock, MapPin, ShoppingBasket } from 'lucide-react'
import BangkokHospital from "../assets/hospital/bangkok-hospital.jpg"
import { Link, useParams } from 'react-router'
import useUserStore from '../stores/userStore'
import useProgramStore from '../stores/programStore';
import { useEffect } from 'react';
import useOrderStore from '../stores/orderStore';

function ThankyouPackage() {
    const token = useUserStore((state) => state.token);
    const order = useOrderStore((state)=>state.order)
    console.log("order check",order)
    const fetchOrder = useOrderStore((state) => state.fetchOrder);
    const { orderId } = useParams()
    console.log("Order Store:", useOrderStore);
    useEffect(()=>{
        if (token && orderId) {
            console.log("Fetching order with ID:", orderId);
        }
        fetchOrder(token, orderId);  
    },[token,orderId,fetchOrder])
    console.log("Checking fetchOrder function:", fetchOrder);
    console.log("Check order",order);
  return (
    <div className='mx-auto container px-4 sm:px-6 lg:px-8 pb-16 text-center'>
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

            {/* Thankyou นัดหมาย */}
            <div className="max-w-3xl mx-auto py-8">
                <h1 className='text-3xl font-bold'>Thank You</h1>
                <p className='text-xl py-3'>
                    ขอขอบพระคุณที่ไว้วางใจใช้บริการของเรา เราหวังเป็นอย่างยิ่งว่าจะได้<br />
                    ดูแลสุขภาพของคุณทางเราจะต่อกลับไปเร็ว ๆ นี้
                </p>
                <div className="flex p-8 my-10 mb-18 items-center justify-between rounded-lg shadow-[0px_4px_4px_#0000000d] bg-white">
                    <div className="text-left">
                        <div className='mb-4'>
                            <p className='text-xl font-bold'>ท่านได้ทำการนัดหมายกับทางเราเรียบร้อยแล้ว</p>
                            <p className='text-gray-400'>โปรดมาถึงก่อนเวลานัดหมาย 15 นาที</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-2xl font-bold'>วันที่และเวลานัดหมาย</p>
                            <div className="flex items-center mt-1">
                            <Calendar className="w-5 h-5 mr-2 text-emerald-400" />
                            <p className='text-gray-400 m-0'>{order?.orderDate.split("T")[0]}</p>
                            </div>
                            <div className='flex items-center mt-1'>
                            <Clock className="w-5 h-5 mr-2 text-emerald-400" />
                            <p className='text-gray-400'>{order?.orderDate.split("T")[1].split(".")[0]} AM</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-emerald-400 font-bold'>สถานที่นัดหมาย</p>
                            <div className='flex gap-2 items-start justify-items-start mt-2'>
                                <div>
                                    <img src={BangkokHospital} className='border w-10 h-10 rounded-full' />
                                </div>
                                <div>
                                    <MapPin className='w-6 h-6' />
                                </div>
                                <div className='max-w-[300px]'>
                                    <p>โรงพยาบาลกรุงเทพ</p>
                                    <p>2 ซ.ศูนย์วิจัย 7 ถ.เพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310 ประเทศไทย</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="avatar">
                            <div className="w-36 rounded-2xl">
                                <img src={order?.program.profileImg} />
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <p className='text-lg font-bold'>{order.program.name}</p>
                        </div>
                    </div>
                    
                </div>
                <Link to="/" className='btn btn-secondary w-[300px] text-lg'>กลับหน้าแรก</Link>
            </div>
        </div>
  )
}

export default ThankyouPackage