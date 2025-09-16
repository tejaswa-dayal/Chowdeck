import CategoriesButton from '../components/CategoriesButton'
import drink from '/drink.svg'
import location from '/location.svg'
import yellowDiamond from '/yellowDiamond.svg'
import blackLocation from '/blackLocation.svg'
import blackDiamond from '/blackDiamond.svg'
import rightArrowYellow from '/rightArrowYellow.svg'
import leftArrowYellow from '/leftArrowYellow.svg'
import foodBowl from '/foodBowl.svg'
import { useEffect, useRef, useState} from 'react'
import CategoriesCaraouselCard from '../components/CategoriesCaraouselCard'
import categoryCardStarIcon from '/categoryCardStarIcon.svg'
import categoryCardDiamondIcon from '/categoryCardDiamondIcon.svg'
import categoryCardSemiCircleIcon from '/categoryCardSemiCircleIcon.svg'
import categoryCardLocationIcon from '/categoryCardLocationIcon.svg'  
import categoryCardPinkSemiCircleIcon from '/categoryCardPinkSemiCircleIcon.svg'
import { motion } from "motion/react"

const categoryCardData = [
    {icon: categoryCardStarIcon, text: 'Quick and easy onboarding'},
    {icon: categoryCardSemiCircleIcon, text: 'Quality meal choices'},
    {icon: categoryCardDiamondIcon, text: 'Live updates on orders'},
    {icon: categoryCardLocationIcon, text: 'Highly rated riders'},
    {icon: categoryCardPinkSemiCircleIcon, text: '24/7 support for customers and vendors'},
    
  ]
const Categories = () => {
  const[activeButton, setActiveButton] = useState('location');
  const duplicatedCategoryCardData = [...categoryCardData, ...categoryCardData];
  const categoryRef = useRef(null);




  return (
    <>
    <div className='bg-(--primary-green) flex flex-col items-center overflow-x-hidden mt-12' ref={categoryRef}>
    <div className='bg-white flex justify-center w-full'>
      <div className='bg-(--primary-yellow) rounded-t-lg py-6 lg:px-[18.95rem] px-[2.822rem] md:px-[3.3rem]'>
        <h2 className='text-5xl max-lg:text-3xl text-black font-bold text-center'>Explore categories</h2>
      </div>
    </div>
      <div className='bg-(--primary-yellow) rounded-b-lg flex flex-col items-center max-lg:px-6'>
        <div className='w-full flex justify-center py-7 lg:px-112 '>
        <img src={drink} alt="" className='w-[9.3rem]'/>
        </div>
         <div className='flex w-full max-lg:justify-center justify-between pb-4 sm:px-2'>
            <div className='flex max-sm:justify-center gap-1 pl-2'>
                <CategoriesButton icon={activeButton === 'location' ? blackLocation : location} activeButton={activeButton} setActiveButton={setActiveButton} buttonInfo='location' iconSize={'20'}/>
                <CategoriesButton num={'01'} activeButton={activeButton} setActiveButton={setActiveButton} buttonInfo='one'/>
                <CategoriesButton num={'02'} activeButton={activeButton} setActiveButton={setActiveButton} buttonInfo='two'/>
                <CategoriesButton num={'03'} activeButton={activeButton} setActiveButton={setActiveButton} buttonInfo='three'/>
                <CategoriesButton num={'04'} activeButton={activeButton} setActiveButton={setActiveButton} buttonInfo='four'/>
                <CategoriesButton icon={activeButton === 'diamond' ? blackDiamond : yellowDiamond} activeButton={activeButton} setActiveButton={setActiveButton} buttonInfo='diamond' iconSize={'15'}/>
            </div>
          <div className='flex gap-1 pr-2 max-lg:hidden'>
            <CategoriesButton icon={leftArrowYellow} activeButton={activeButton} buttonInfo={'leftArrow'} iconSize={'20'} setActiveButton={setActiveButton}/>
            <CategoriesButton icon={rightArrowYellow} activeButton={activeButton} buttonInfo={'rightArrow'} iconSize={'20'} setActiveButton={setActiveButton}/>
          </div>
        </div>
      </div>
      <div className='flex max-lg:flex-col justify-center items-center sm:px-60' data-aos="fade-up">
        <div className='w-full pt-4'>
          <h3 className='text-4xl text-center md:text-start max-md:text-2xl  font-semibold text-white'>Chowdeck has<br className='max-lg:hidden'/> you covered <img className='inline-block md:-mt-2 lg:-mt-6' src={foodBowl}  alt="Food bowl image" width={140}/></h3>
        </div>
        <div className='w-full'>
          <p className='text-white font-light px-6 max-md:px-20 lg:px-2 sm:text-xl'>Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let’s deliver happiness to your doorstep in minutes.  </p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-6">
      <motion.div className='w-full flex justify-center gap-10 max-sm:hidden'
      animate={{
                    x: ['0% ','-100%','0%'],
                    transition: {
                        ease: 'easeInOut',
                        duration: 10,
                        repeat: Infinity,
                    }
                }}
                >
        {
          categoryCardData.map((card, index) => (
            <CategoriesCaraouselCard key={index} icon={card.icon} text={card.text} />
          )
        )
        }

        {
          duplicatedCategoryCardData.map((card, index) => (
            <CategoriesCaraouselCard key={`dup-${index}`} icon={card.icon} text={card.text} />
          )
        )
        }
      </motion.div>
      <motion.div className='w-full flex justify-center gap-2 sm:hidden'
      animate={{
                    x: ['0% ','-100%','0%'],
                    transition: {
                        ease: 'easeInOut',
                        duration: 10,
                        repeat: Infinity,
                    }
                }}
                >
        {
          categoryCardData.map((card, index) => (
            <CategoriesCaraouselCard key={index} icon={card.icon} text={card.text} />
          )
        )
        }
      </motion.div>
      </div>
      <div className='py-10'>
        <img src="/categoryPhoneCollage.png" alt=""  className='object-contain'/>
      </div>
    </div>
      <div className='bg-linear-to-t from-[rgb(255,255,255)] from-40% to-(--primary-green) w-full '>
          <img src="/map.png" alt="" className='object-contain w-full'/>
          </div>
    </>
  )
}

export default Categories;  


