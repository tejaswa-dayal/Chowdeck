import React from 'react'
import JoinUsCard from '../components/JoinUsCard'
import star from '/star.svg'
import semiCircle from '/semiCircle.svg'
import diamond from '/diamond.svg'
import StartSelling from '/StartSelling.jpg'
import DeliverHappiness from '/DeliverHappiness.jpg'
import BehindTheScenes from '/BehindTheScenes.jpg'
import downArrowIcon from "../assets/downArrow.svg"


const JoinUs = () => {
  const startSellingContent = 'Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.';
  const deliverHappinessContent = 'Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.';
  const behindTheScenesContent = 'If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.';
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='py-10 flex justify-center items-center gap-1'>
      <h1 className='md:text-5xl text-2xl font-light text-(--primary-grey)'>Join our growing network</h1>
      <img src={downArrowIcon} alt="" className='mt-1' width={40}/>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
      <JoinUsCard title={'Start Selling'} icon={star} image={StartSelling} content={startSellingContent}/>
      <JoinUsCard title={'Deliver Happiness'} icon={semiCircle} image={DeliverHappiness} content={deliverHappinessContent}/>
      <JoinUsCard title={'Behind the Scenes'} icon={diamond} image={BehindTheScenes} content={behindTheScenesContent}/>
    </div>
    </div> 
  )
}

export default JoinUs
