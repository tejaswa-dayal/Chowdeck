import React from 'react'
const CTAButton = ({color, icon, title, iconSize, size}) => {
  
  return (
    <button className={`flex justify-center items-center gap-1 ${color == 'green' ? 'bg-(--primary-green) text-white' : (color === 'blue' ? 'bg-[#1DA1F2] text-white': "bg-white text-(--primary-green)")}  text-xs ${size == 'full' ? "px-6 py-4 rounded-lg" : "p-4 rounded-full"} ${color == 'green' ? 'hover:bg-(--secondary-green)' : ( color === 'blue' ? 'hover:bg-[#1b92dc]' : "hover:bg-gray-300/90 ")} transition-colors duration-300 cursor-pointer`}><img src={icon} alt=""  className="object-contain" width={iconSize} />{title}</button>
  )
}

export default CTAButton
