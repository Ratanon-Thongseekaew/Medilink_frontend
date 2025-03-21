import React from 'react'
import AreaChart from './Areachart';

function ActivityChart() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Activity User</h2>
          <p className="text-gray-600">Last 6 Month</p>
        </div>
        <AreaChart />
      </div>
    );
  }

export default ActivityChart