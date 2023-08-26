import Image from 'next/image'
import summaryItems from '../../data.json'

type Variant = {
  [key: string]: {
    text: string
    bg: string
  }
}

export default function Home() {
  const variantColor:Variant  = {
    Reaction: {text: 'text-light-red', bg: 'hover:bg-light-red'},
    Memory: {text: 'text-orangey-yellow', bg: 'hover:bg-orangey-yellow'},
    Verbal: {text: 'text-green-teal', bg: 'hover:bg-green-teal'},
    Visual: {text: 'text-cobalt-blue', bg: 'hover:bg-cobalt-blue'},
  }
  return (
    <main className="bg-white flex items-center justify-center w-screen h-screen">
      <section className='md:max-w-[700px] w-full h-full md:h-auto flex flex-col md:flex-row rounded-lg shadow-2xl'>
        <div className='bg-gradient-card md:w-1/2 rounded-b-3xl  md:rounded-lg py-8 px-2 flex flex-col items-center'>
          <h1 className='text-pale-blue text-lg font-bold'>Your Result</h1>

          <div className=' mt-6 rounded-full bg-circle-gradient w-[150px] h-[150px] flex items-center justify-center'>
            <p className='text-white font-bold text-4xl'>76 <span className='text-sm font-normal text-light-lavender block'>of 100</span></p>
          </div>

          <p className='font-bold text-2xl text-white mt-auto'>Great</p>
          <p className='text-light-lavender text-md max-w-[300px] md:max-w-[250px] mt-2 text-center'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className='px-4 py-6 flex-1'>
          <p className='font-bold text-lg text-dark-gray-blue'>Summary</p>
          
          <ul className='mt-4 flex flex-col gap-4 w-full'>
            {summaryItems.map((item, idx) => (
              <li key={idx} className={`flex items-center justify-between w-full px-2 py-4 ${variantColor[item.category].bg} hover:bg-opacity-[0.15] rounded-md`}>
                <div className='flex items-center'>
                <Image src={item.icon} alt={item.category} width={24} height={24} />

                  <p className={`${variantColor[item.category].text} ml-2 font-bold text-sm`}>{item.category}</p>
                </div>

                <p className='text-dark-gray-blue font-bold text-sm'>{item.score} {'  '} <span className='font-medium'>/ 100</span></p>
              </li>
            ))}
          </ul>

          <button className='transition duration-500 ease-in-out mt-4 h-[50px] w-full bg-dark-gray-blue text-white flex items-center justify-center rounded-3xl hover:bg-gradient-card '>Continue</button>
        </div>
      </section>
    </main>
  )
}
