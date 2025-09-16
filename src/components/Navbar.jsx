import { useState } from 'react'
import { motion } from "motion/react"
import { Squash as Hamburger } from 'hamburger-react'
import arrow from "../assets/arrow.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='z-30'>
        {/* Large screen navbar */}
        <div className='flex justify-between items-center px-4 sm:px-12 py-4 bg-gray-300/20'>
            <div className='sm:ml-8 px-6 py-1 bg-(--primary-green) rounded-full flex justify-center items-center gap-[0.12rem] cursor-pointer hover:bg-(--secondary-green) transition-colors duration-300'>
                <img src="./logo.svg" className="inline-block text-xs" alt=""/>
                <h2 className='text-xs font-semibold text-white'>Chowdeck</h2>
            </div>
            <div className="sm:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen}  color='var(--primary-green)'/>
            </div>
            <ul className='flex justify-center items-center gap-12 font-semibold text-black text-xs max-sm:hidden'>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-colors duration-300'>
                    Company
                </li>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-colors duration-300'>
                    FAQs
                </li>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-colors duration-300'>
                    Blog
                </li>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-colors duration-300'>
                    Contact
                </li>
            </ul>
            <div className='flex justify-center items-center gap-6 mr-12 text-xs max-sm:hidden '>
                <div className='flex justify-center items-center gap-2'>
                    <p className='font-semibold text-black'>Customers</p>
                    <img src={arrow} className='-mb-0.5 cursor-pointer' alt="Arrow button" width={15}/>
                </div>
                <img src={cart} alt="Cart button" className='cursor-pointer hover:scale-110 transition-transform duration-300' width={42}/>
            </div>
        </div>
        {/* Mobile Screen Navbar */}
        <motion.div className={`w-full h-[94vh] md:hidden bg-(--primary-green) px-8 pt-15 pb-12 z-30 absolute`}
        animate={{ x: isOpen ? '0' : "-100%" }}
  initial={false} // prevents animation on first mount
  transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className='flex flex-col gap-15 items-center'>
                <div className='w-full'>
                    <ul className='flex flex-col justify-center items-center gap-20 font-semibold text-white text-4xl '>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-all duration-300 text-center w-full pb-15 border-b-1 border-gray-200/50'>
                    Company
                </li>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-colors duration-300 text-center w-full pb-15 border-b-1 border-gray-200/50'>
                    FAQs
                </li>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-colors duration-300 text-center w-full pb-15 border-b-1 border-gray-200/50'>
                    Blog
                </li>
                <li className='hover:text-(--secondary-green) cursor-pointer transition-colors duration-300'>
                    Contact
                </li>
            </ul>
                </div>
            </div>

        </motion.div>
    </nav>
  )
}

export default Navbar
