
const CategoriesCaraouselCard = ({icon, text}) => {
  return (
    <div className='flex justify-center items-center  bg-neutral-100/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm 
 py-2 gap-3 px-4 shrink-0'>
       <img src={icon} alt="" />
        <p className='text-white font-medium leading-1'>{text}</p>
    </div>
  )
}

export default CategoriesCaraouselCard
