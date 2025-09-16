
const TestimonialCard = ({name, image, username, testimonial}) => {

    
  return (
    <div className="max-w-80 bg-[#F9FAFB] rounded-lg flex flex-col p-4 ">
        <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex justify-between items-center rounded-lg gap-10 w-full">
            <div className="flex justify-start items-center gap-1">
                <div className="rounded-full">
                    <img src={image} alt="" className="object-contain" width={50}/>
                </div>
                <div className="text-start">
                    <h2 className="font-bold text-black">{name}</h2>
                    <p className="text-sm text-gray-300 font-light -ml-1">{username}</p>
                </div>
            </div>
            <div className="bg-[#1DA1F2] flex justify-center items-center p-2 rounded-lg">
                    <img src="/twitterLogo.svg" alt="" className="object-contain" width={26}/>
                </div>
            </div>
            <p className="text-lg text-black font-semibold text-start">{testimonial}</p>
        </div>
      
    </div>
  )
  }
export default TestimonialCard
