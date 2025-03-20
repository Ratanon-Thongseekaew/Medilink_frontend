// import React from 'react'

function FadeOverlayBrand() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10">
      <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-[#f1f5f9] to-transparent" />
      <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-[#f1f5f9] to-transparent" />
    </div>
  )
}

export default FadeOverlayBrand