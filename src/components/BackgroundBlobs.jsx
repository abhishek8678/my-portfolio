import React from 'react'

export const BackgroundBlobs = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 bg-clay-background">
      {/* Top Left Blob */}
      <div 
        className="absolute -top-[10%] -left-[10%] h-[60vh] w-[60vh] rounded-full blur-3xl animate-clay-float mix-blend-multiply opacity-50"
        style={{ backgroundColor: '#8B5CF6' }} // Primary violet
      />
      {/* Top Right Blob */}
      <div 
        className="absolute top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full blur-3xl animate-clay-float-delayed mix-blend-multiply opacity-50 animation-delay-2000"
        style={{ backgroundColor: '#0EA5E9' }} // Sky blue
      />
      {/* Bottom Center Blob */}
      <div 
        className="absolute -bottom-[20%] left-[20%] h-[70vh] w-[70vh] rounded-full blur-3xl animate-clay-float-slow mix-blend-multiply opacity-50 animation-delay-4000"
        style={{ backgroundColor: '#EC4899' }} // Hot pink
      />
    </div>
  )
}
