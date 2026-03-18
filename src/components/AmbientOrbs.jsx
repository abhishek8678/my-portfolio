import React from 'react'

export const AmbientOrbs = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 bg-min-bg">
      {/* Top Center Amber Orb */}
      <div 
        className="absolute top-[-20%] left-[20%] right-[20%] h-[400px] md:h-[600px] rounded-full blur-[100px] md:blur-[150px] opacity-[0.03] md:opacity-[0.04] transition-all duration-1000"
        style={{ backgroundColor: '#F59E0B' }}
      />
      {/* Bottom Right Slate Orb */}
      <div 
        className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full blur-[150px] opacity-[0.05]"
        style={{ backgroundColor: '#1A1A24' }} 
      />
       {/* Center subtle coolness */}
      <div 
        className="absolute top-[40%] -left-[10%] h-[400px] w-[400px] rounded-full blur-[120px] opacity-[0.02]"
        style={{ backgroundColor: '#FAFAFA' }} 
      />
    </div>
  )
}
