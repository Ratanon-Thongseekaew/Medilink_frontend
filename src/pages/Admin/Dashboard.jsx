import StatsCards from '../../components/dashborard/StatsCards'
import ActivityChart from '../../components/dashborard/ActivityChart'
import DoctorList from '../../components/dashborard/DoctorList'
import OnlineAppointment from '../../components/dashborard/OnlineAppointment'
import ProgramList from '../../components/dashborard/ProgramList'

function Dashboard() {
  return (
    //div Wrap Container
    <div className='pl-70 gap-30 w-full pt-8 pb-8 pr-8'>
      <div className="bg-teal-400 text-white p-6 rounded-lg mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">นพ. ปวเรศ วิชัยโย</h1>
          <p>นี่คืองานสำคัญ อัปเดต และการแจ้งเตือนของคุณ คุณสามารถตั้งค่าการแจ้งเตือนในแอปของคุณได้</p>
        </div>
        <img 
          className="rounded-full w-24 h-24" 
          src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-4_gel7vc.jpg"
          alt="Doctors illustration"
        />
      </div>
      <StatsCards />
      <ActivityChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ProgramList />
        <DoctorList />
      </div>
        <OnlineAppointment />
    </div>
  )
}

export default Dashboard