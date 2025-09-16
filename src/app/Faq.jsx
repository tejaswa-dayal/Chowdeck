import { useState } from "react"

const questions = [
    "What is Chowdeck?",
    "What locations do we currently deliver to?",
    "What is Chowdeck wallet?",
    "What is Chowscore?",
    "What is Service fee?",
    "Why do we charge Service fee?",
    "What is Surge fee?",
]

const answers = [
    "Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa maxime doloribus consequuntur vel sequi, vitae nihil distinctio soluta a aliquam obcaecati quisquam incidunt dolores!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, libero accusamus quisquam quam enim itaque cupiditate laudantium? Quia reprehenderit nesciunt a accusamus eligendi, ducimus et eum nam omnis, officiis aut.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis, natus possimus molestias ut quisquam soluta dolor vel voluptas mollitia!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorum perferendis non nam natus, culpa deserunt voluptatum fugiat eum maiores temporibus porro nemo quos assumenda voluptatibus? Possimus?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita fuga neque ea molestiae pariatur facere debitis itaque tempore necessitatibus. Adipisci vel nostrum deserunt dolore quaerat maxime non?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis, natus possimus molestias ut quisquam soluta dolor vel voluptas mollitia!",
]
const Faq = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  return (
    <>
    <div className='w-full px-7 mt-15'>
        <div className='sm:grid sm:grid-cols-2 border-t-3 border-r-3 border-l-3 rounded-t-lg px-8 max-sm:text-center pt-4 pb-6'>
            <h1 className='text-5xl font-bold text-(--primary-green)'>
                FAQs
            </h1>
            <h1 className='text-5xl font-bold text-(--primary-green) max-sm:hidden ml-2'>
                ANS.
            </h1>
        </div>

    </div>
    <div className="bg-black px-7 py">
      <div className="px-8  bg-white border-l-3 border-r-3 border-b-3 rounded-b-lg flex flex-col max-sm:gap-3 sm:grid sm:grid-cols-2 pb-4">
        <div className="pr-4 py-4 flex flex-col gap-4 overflow-y-scroll max-h-52 sm:max-h-100"
        style={{scrollbarWidth: "thin",
          scrollbarColor: "rgba(209,213,220,0.5) white",
        }}
        >
            {
              questions.map((question,index)=>
                <div key={index} className={` rounded-xl p-4 cursor-pointer ${index === activeQuestionIndex ? "bg-black text-white" : "bg-gray-300/30"} transition-all duration-300`}
              onClick={() => setActiveQuestionIndex(index)}
              >
                  <div className="flex justify-between">
                  <p className="grow">
                    {question}
                  </p>
                  {
                    index === activeQuestionIndex ? <img src="/categoryCardStarIcon.svg" alt="" /> : ""
                  }
                  
                  </div>
            </div>
              )
            }
                
        </div>
        <div className=" py-4 bg-(--primary-yellow) rounded-xl">
          <div className="flex flex-col gap-8 p-4 px-8">
            <img src="/starBlack.png" alt="" width={25}/>
            <p className="text-lg font-medium">{answers[activeQuestionIndex]}</p>
          </div>
        </div>
      </div>
    </div>
            </>
  )
}

export default Faq
