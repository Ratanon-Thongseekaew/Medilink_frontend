import ProgramItem from './ProgramItem'

function ProgramList() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Package & Program List</h2>
                <a href="#" className="text-teal-500">View All</a>
            </div>
            <div className="space-y-4">
                <ProgramItem name="แพ็กเกจตรวจสุขภาพพื้นฐาน และทั่วไป" price="8,000" />
                <ProgramItem name="แพ็กเกจตรวจสุขภาพพื้นฐาน และทั่วไป" price="12,000" />
                <ProgramItem name="แพ็กเกจตรวจสุขภาพพื้นฐาน และทั่วไป" price="12,000" />
            </div>
        </div>
    )
}

export default ProgramList