import React from 'react'
import Navbar from '../components/Navbar'
import CTAButton from '../components/CTAButton'

const Hero = () => {
  return (
    <section className='h-[100vh] relative  bg-[url("/heroImage.png")] bg-cover bg-no-repeat bg-center'>
      <Navbar/>
        <div className='py-14 flex flex-col gap-6 justify-center items-center text-center' data-aos="zoom-in" data-aos-duration="1500">
          <h1 className='text-8xl max-sm:text-6xl font-bold'>Have you eaten?</h1>
          <div className='flex max-sm:flex-col justify-center gap-4'>
           <CTAButton color={'green'} icon={'./src/assets/playstore.svg'} title={'Download on Google Play'} iconSize={15} size={'full'}/>
            <CTAButton color={'green'} icon={'./src/assets/apple.svg'} title={'Download on App Store'} iconSize={18} size={'full'}/>
          </div>
        </div>
        <div className='absolute bottom-40 right-6 bg-(--primary-green) rounded-full p-2'>
          <img src="./src/assets/chat.svg" alt="" width={20}/>
        </div>

        <img src="./src/assets/biker.svg" className='absolute bottom-0 left-14' alt="" />
    </section>
  )
}

export default Hero
