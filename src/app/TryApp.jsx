import { useEffect, useRef, useState } from 'react'
import CTAButton from '../components/CTAButton';

const TryApp = () => {
    const [activeTab, setActiveTab] = useState('Customer');
    const [highlightStyle, setHighlightStyle] = useState({});
    const customerRef = useRef(null);
    const vendorsRef = useRef(null);
    const ridersRef = useRef(null); 

    useEffect(() => {
      let currentRef = activeTab === "Customer" ? customerRef : activeTab === "Vendors" ? vendorsRef : ridersRef;
      if (currentRef.current) {
        const { offsetLeft, offsetWidth } = currentRef.current;
        setHighlightStyle({
          left: offsetLeft,
          width: offsetWidth
        });
      }
    }, [activeTab]);
  return (
    <div className='flex flex-col justify-center items-center text-center gap-6 pt-10'>
      <div className="relative bg-(--secondary-yellow) rounded-full">
  <ul className="relative flex gap-2 justify-center items-center">
    <div
      className={`absolute top-0 bottom-0 rounded-full bg-(--primary-yellow) transition-all duration-500 ease-in-out`}
      style={highlightStyle}
    />

    {/* Tabs */}
    <li
      ref={customerRef}
      className=" z-10 text-black text-xs font-light px-4 py-2 cursor-pointer text-center flex-1"
      onClick={() => setActiveTab("Customer")}
    >
      Customer
    </li>
    <li
    ref={vendorsRef}
      className=" z-10 text-black text-xs font-light px-4 py-2 cursor-pointer text-center flex-1"
      onClick={() => setActiveTab("Vendors")}
    >
      Vendors
    </li>
    <li
    ref={ridersRef}
      className=" z-10 text-black text-xs font-light px-4 py-2 cursor-pointer text-center flex-1"
      onClick={() => setActiveTab("Riders")}
    >
      Riders
    </li>
  </ul>
</div>
    <h2 className='text-5xl text-black font-bold'>Try the App</h2>
    <p className='max-md:px-4 lg:max-w-[30%] font-light'>Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</p>
    <div className='flex gap-1'>
      <CTAButton color={'green'} icon={'./src/assets/playstore.svg'} title={''} iconSize={20}/>
      <CTAButton color={'green'} icon={'./src/assets/apple.svg'} title={''} iconSize={20} />
    </div>
    <img src="./TryAppImage.jpg" alt="" width={320} data-aos="fade-left"/>
    </div>
  )
}

export default TryApp
