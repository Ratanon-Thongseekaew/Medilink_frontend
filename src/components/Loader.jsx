// import React from 'react'

function Loader() {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-transparent text-emerald-400 text-4xl animate-spin flex items-center justify-center border-t-emerald-400 rounded-full">
          <div className="w-12 h-12 border-4 border-transparent text-teal-400 text-2xl animate-spin flex items-center justify-center border-t-teal-400 rounded-full" />
        </div>
      </div>
    )
  }
  
export default Loader