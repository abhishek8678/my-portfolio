import React from 'react'

export const AmbientOrbs = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 bg-[#E0E5EC]">
      {/* Top Left Subtle Extrusion */}
      <div 
        className="absolute top-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full shadow-neu-extruded opacity-40 animate-float"
      />
      {/* Bottom Right Nested Inset */}
      <div 
        className="absolute -bottom-[15%] -right-[5%] h-[500px] w-[500px] rounded-full shadow-neu-inset opacity-50 flex items-center justify-center"
      >
        <div className="h-[300px] w-[300px] rounded-full shadow-neu-extruded animate-float-nested"></div>
      </div>
       {/* Center subtle coolness */}
      <div 
        className="absolute top-[30%] left-[60%] h-[200px] w-[200px] rounded-full shadow-neu-inset-deep opacity-30 animate-float"
      />
    </div>
  )
}
