// import React from 'react'

function SkeletonCard() {
    return (
      <div className="animate-pulse p-4 bg-gray-200 rounded-md mb-4">
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    )
  }
  
  export default SkeletonCard