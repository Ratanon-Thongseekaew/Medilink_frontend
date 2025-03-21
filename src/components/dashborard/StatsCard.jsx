import { User } from "lucide-react";

function StatsCard({ bgColor, title, value }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className={`${bgColor} p-3 rounded-full`}>
                <User className="stroke-gray-600 stroke-3" />
            </div>
            <div className="ml-4">
                <p className="text-gray-600">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
}

export default StatsCard