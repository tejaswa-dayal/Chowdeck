import React from 'react'
const CategoriesButton = ({icon,num,activeButton,buttonInfo,setActiveButton,iconSize}) => {
  const numberInWords = {
    'one' : '01',
    'two' : '02',
    'three' : '03',
    'four' : '04',
  }

  return (
    <button className={`flex justify-center items-center cursor-pointer rounded-full p-4 w-12 h-12 ${activeButton == buttonInfo && (buttonInfo != 'leftArrow' && buttonInfo != 'rightArrow') ? 'bg-(--primary-yellow) border-3 border-black' : 'bg-black'}`} onClick={() =>
  setActiveButton(buttonInfo)}>
        {icon ? (<img src={icon}  alt="" width={iconSize}/>) : (<p className={`text-sm ${numberInWords[activeButton] == num ? 'text-black' : 'text-(--primary-yellow)'}`}>{num}</p>)}
    </button>
  )
}
export default CategoriesButton
