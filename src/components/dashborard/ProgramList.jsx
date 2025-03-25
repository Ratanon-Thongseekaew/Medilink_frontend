import ProgramItem from './ProgramItem'

function ProgramList() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Package & Program List</h2>
                <a href="/admin/online-store" className="text-teal-500">View All</a>
            </div>
            <div className="space-y-4">
                <ProgramItem image="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/cancer_screening_package_banner_rpkpi4.jpg" name="Basic Annual Checkup" price="3,000" />
                <ProgramItem image="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368420/comprehensive_health_screening_banner_xlvl4i.jpg" name="Comprehensive Health Screening" price="12,500" />
                <ProgramItem image="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368421/health_checkup_package_banner_msva4n.jpg" name="Executive Health Package" price="25,000" />
            </div>
        </div>
    )
}

export default ProgramList