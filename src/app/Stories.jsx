import StoriesCard from '../components/StoriesCard'
import story1 from "/story1.jpg"
import story2 from "/story2.jpg"
import story3 from "/story3.jpg"

const storiesData = [
    {
        image: story1,
        title: "Chowdeck Joins Y Combinator's S'22 Batch",
        content: "Chowdeck has been accepted to Y Combinator’s Summer Batch 2022, joining a league of extraordinary companies that are dis...",
    },
    {
        image: story2,
        title: "Champions : Kingsley Agbinya",
        content: "Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...",
    },
    {
        image: story3,
        title: "Champions : Anthony Agam",
        content: "Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.",
    }
]
const Stories = () => {
  return (
    <div className='p-8'>
        <div className='flex gap-3 items-center max-md:justify-center'>

        <h1 className='text-5xl font-bold '>
        Stories
        </h1>
        <img src="/Pasta.png" alt="Pasta image" />
        </div>
        <div className='flex flex-col md:flex-row flex-wrap max-sm:justify-center items-center gap-8 pt-4'>
            {
                storiesData.map((story,index) => 
                    <StoriesCard key={index} title={story.title} image={story.image} content={story.content}/>
            )
        }
        </div>
    </div>
  )
}
export default Stories
