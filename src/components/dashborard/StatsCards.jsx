// import React from 'react'
import StatsCard from './StatsCard';

function StatsCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard bgColor="bg-red-100" title="Total Patients" value="2,015" />
        <StatsCard bgColor="bg-yellow-100" title="Total Admin" value="550" />
        <StatsCard bgColor="bg-blue-100" title="Total Partner" value="2,000" />
      </div>
    );
  }

export default StatsCards