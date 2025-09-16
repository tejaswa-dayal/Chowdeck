
const StoriesCard = ({title, image, content}) => {
  return (
    <div className="flex flex-col border-3 border-black max-w-85 rounded-xl min-h-96 h-auto" data-aos="zoom-in" >
        <div className="border-b-3 border-black w-full">
            <img src={image} alt="" className="object-contain rounded-t-xl"/>
        </div>
        <div className="flex flex-col items-center px-4 gap-4 relative grow py-2 text-center">
            <h2 className="text-sm font-semibold ">{title}</h2>
            <div className="px-5 w-full">

            <p className="text-sm font-light ">{content}</p>
            </div>
            <div className="absolute bottom-5">

            <button className="bg-gray-400/20 text-sm rounded-lg text-(--primary-green) hover:bg-(--primary-green) hover:text-white w-full px-30 py-2 cursor-pointer transition-colors duration-300 ">
                Read More
            </button>
            </div>
        </div>
    </div>
  )
}

export default StoriesCard
