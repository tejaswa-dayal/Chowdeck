import React from 'react'

const JoinUsCard = ({title, icon, image, content}) => {
  return (
    <div data-aos="fade-up" className='flex flex-col rounded-lg border-3 border-black max-w-xs gap-4 min-h-[24.37rem]'>
      <div className='flex flex-col gap-5 p-4 grow'>
      <img src={icon} alt="Start Selling Icon" width={20}/>
      <h2 className='text-xl font-semibold text-black'>{title}</h2>
      <p className='tracking-wide font-light text-sm'>{content}</p>
      <p className='text-xs font-semibold tracking-widest'>See More <img src="./rightArrow.svg" className="inline-block" width={10} alt="" /></p>
      </div>
      <div >
        <img src={image} className='object-fill' alt="" />
      </div>
    </div>
  )
}

export default JoinUsCard
