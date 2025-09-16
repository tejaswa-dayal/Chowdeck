import React from 'react'
import CTAButton from '../components/CTAButton'
import playstore from '../assets/playstore.svg'
import apple from '../assets/appleGreen.svg'
import drink from '/drink.svg'



const footerListItems = [
    {
        COMPANY: ["Customers","Vendors","Riders", "Storefront","About","Careers","FAQs","Blog","Contact","Terms of Use","Privacy Policy"]},
        {"Cuisines near you" : [
  "Pasta near me",
  "Rice near me",
  "Fast food near me",
  "Asian food in Lagos",
  "African food in Lagos",
  "Breakfast menu in Lagos",
  "Fitfam stores in Lagos",
  "American food in Lagos",
  "Pastries in Lagos",
  "Salad in Lagos",
  "Fruits in Lagos"
]},
        {popular : [
  "Food delivery",
  "Surulere",
  "Ogudu",
  "Yaba",
  "Ikeja",
  "Lekki",
  "King Glab",
  "Korede Spaghetti",
  "Iyan Aladuke",
  "Food Fusion",
  "Belefull"
]},
]

const Footer = () => {
  return (
    <div className='bg-black px-7 py-10'>
      <div className='flex gap-4 justify-center items-center w-full'>
            <div className='bg-(--primary-green) rounded-3xl px-4 sm:pl-7 max-sm:text-center py-6'>
                <h2 className='text-white font-bold text-5xl max-sm:text-3xl '>
                    Place your <br className='max-sm:hidden'/>order in seconds
                </h2>
                <div className='py-10'>
                    <div className='p-2'>

                    <CTAButton icon={playstore} iconSize={15} title={'Download on Google Play'} size={'full'} color={'white'}/>
                    </div>
                    <div className='p-2'>

                    <CTAButton icon={apple} iconSize={15} title={'Download on App Store'} size={'full'} color={'white'}/>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-end gap-2'>
                    <div className='flex flex-col gap-4 place-items-start place-content-between'>
                        <img src="/tag.png" alt="" className='object-contain'/>
                        <button className='bg-(--primary-yellow) pr-7 pl-1 py-2 rounded-lg flex items-center gap-1 ml-2'>
                            <div className='bg-(--primary-green) w-5 h-5 border-4 rounded-full'></div>
                            <p className='text-lg font-bold'>CDNWEB</p>
                        </button>
                        <p className='font-mono text-sm text-white ml-2 text-start'>Get <span className='text-(--primary-yellow)'>₦300 off</span> your first order when you use this promo code!</p>
                    </div>
                    <img src={drink} alt="" width={200} className='place-self-end'/>
                </div>
            </div>
                <img src="/phoneImage.png" alt="" className='max-lg:hidden'/>
      </div>
      <div>
      </div>
      <div className='flex flex-col pt-7'>
        <div className='w-full sm:flex sm:justify-between border-b-1 border-gray-200/30'>
            <div className='flex items-center gap-1'>
                <img src="/footerStarIcon.svg" alt="" className='object-contain'/>
                <div className='flex max-sm:flex-col sm:gap-2 sm:items-end'>
                    <h1 className='text-white font-bold text-4xl'>Cool stuff only</h1>
                    <p className='text-[#FFEDB3] text-sm font-light'>Subscribe to our newsletter</p>
                </div>
            </div>
            <img src="/footerPacketImage.png" alt="" className='max-sm:hidden'/>
        </div>
        <div className='w-full flex justify-between items-center border-b-1 border-gray-200/30'>
            <div className=' w-full border-r-1 border-gray-200/30'>
                <input type="email" placeholder='yourname@email.com' className='placeholder:text-gray-300/50 focus:border-none focus:outline-none w-full py-6 text-gray-300/50'/>
            </div>
            <div className='sm:px-25 px-10 '>
                <img src="/footerRightArrowPurple.svg" alt="" className='cursor-pointer'/>
            </div>
        </div>
            <div className='flex max-sm:flex-col border-b-1 border-gray-200/30 '>
                <div className=' flex flex-col justify-between  border-r-1 border-gray-200/30 lg:pr-60 py-6 max-sm:hidden'>
                    <img src="footerStarImage.png" alt="" width={100}/>
                    <div className='flex items-end max-lg:pr-1'>
                        <img src="./logo.svg" className='md:w-24 lg:w-28' alt=""/>
                        <h2 className='text-3xl font-semibold text-white'>Chowdeck</h2>
                    </div>
                </div>
                <div className='flex flex-col-reverse sm:flex-col w-full'>

                <div className='flex max-sm:flex-col w-full'>
                        {
                            footerListItems.map((item,index) =>
                                <div className={`flex sm:flex-col pl-6 sm:w-[29%] ${index !== footerListItems.length-1 ? "sm:border-r-1 sm:border-gray-200/30" :""}  py-6 gap-3 max-sm:gap-10`} key={index}>
                            <div className='tracking-wide text-gray-300/50 font-bold max-sm:max-w-[27.5%] w-[50%]' >
                            {(Object.keys(item)[0]).toUpperCase()}
                        </div>
                        <ul className='text-white flex flex-col gap-4 max-sm:text-sm'>
                            {
                                item[Object.keys(item)[0]].map((title,titleIndex)=>
                                    <li key={titleIndex}>{title}</li>
                            )
                        }
                        </ul>
                    </div>
                            )
                        }
                        
                    </div>
                        <div className='flex flex-col w-full border-b-1 border-t-1 border-gray-200/50'>
                            <div className='flex justify-between w-full border-b-1 border-gray-200/50'>
                                <div className='flex justify-center items-center py-6 border-r-1 border-gray-200/50 gap-1 w-full'>

                                <img src="/footerBlueDiamond.svg" alt="" />
                                <p className='text-white text-lg font-semibold'>Twitter</p>
                                </div>
                                <div className='flex justify-center items-center py-6 gap-1 w-full'>

                                <img src="/footerPinkSun.svg" alt="" />
                                <p className='text-white text-lg font-semibold'>Instagram</p>
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <div className='flex justify-center items-center py-6 border-r-1 border-gray-200/50 gap-1 w-full'>
                                <img src="/footerPurpleSemiCircle.svg" alt="" />
                                <p className='text-white text-lg font-semibold'>Facebook</p>
                                </div>
                                <div className='flex justify-center items-center py-6 gap-1 w-full'>

                                <img src="/footerOrangeCircle.svg" alt="" />
                                <p className='text-white text-lg font-semibold'>LinkedIn</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
      </div>
      <div className='w-full flex justify-center items-center pt-3 sm:hidden'>
                        <img src="./logo.svg" width={35} alt=""/>
                        <h2 className='text-3xl font-semibold text-white'>Chowdeck</h2>
                    </div>
      <p className='text-gray-200/50 text-center text-sm py-4 max-sm:text-xs'>© All Rights Reserved. 2022, Chowdeck Logistics Inc.</p>
    </div>
  )
}

export default Footer
