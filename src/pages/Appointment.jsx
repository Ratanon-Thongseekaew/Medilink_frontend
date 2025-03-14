import { CalendarDays } from "lucide-react"

function Appointment() {
  return (
    <div className='mx-auto container px-4 sm:px-6 lg:px-8 pb-16 text-center'>
            <div className='w-full flex justify-center'>
                <div>
                    <div className='flex gap-2'>
                        <CalendarDays className='w-8 h-8 stroke-emerald-400' />
                        <h1 className='text-4xl text-emerald-400 font-semibold'>Appointment</h1>
                    </div>
                    <div className='font-semibold my-2 bg-emerald-400 text-white py-2 flex w-[220px] text-lg rounded-lg justify-center'>
                        นัดหมายแพทย์
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Appointment