
function OnlineAppointment() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Online Appointment</h2>
                <a href="#" className="text-teal-500">View All</a>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="py-2">No.</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Date & Time</th>
                        <th className="py-2">Age</th>
                        <th className="py-2">Gender</th>
                        <th className="py-2">Appoint for</th>
                        <th className="py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2">01</td>
                        <td className="py-2">Natiya</td>
                        <td className="py-2">20 May 5:30pm</td>
                        <td className="py-2">50</td>
                        <td className="py-2">Female</td>
                        <td className="py-2">Dr. Lee</td>
                        <td className="py-2">
                            <button className="text-teal-500">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="text-red-500 ml-2">
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    {/* Repeat for other appointments */}
                </tbody>
            </table>
        </div>
    );
}

export default OnlineAppointment