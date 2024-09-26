import Image from 'next/image'; 
import Video from './ui/VideoComponent';
// import Featured from './Featured';

function Homepage() {
  return (
    <div>
        {/* promotion */}
      <div className='flex  h-screen items-center justify-around '>
        <div className='object-fit mt-10  h-screen w-[400px] '>
        <Video url="/sidevideo.mp4"/>
        </div>
        <div className='font-serif  w-1/2 h-screen  items-center justify-center flex'>
       <h1 className='text-wrap text-6xl  bg-opacity-45'>Clothes that Define Your Style</h1>
        </div>
      </div>
        
      {/* shop adidas */}
    <div className='flex bg-emerald-200 rounded-md overflow-hidden mt-8 h-96'>
    <div className='relative w-1/2 h-full'>
        <Image src='/adidas.jpg' alt='Adidas image' layout='fill' objectFit='contain' />
    </div>
    <div className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='text-3xl font-bold text-wrap w-1/2'>Shop Adidas</h1> 
        <h1 className='text-xl w-1/2 mr-28'> Elevate Your Game with Top Gear</h1>
        <button className='bg-white px-10 rounded-xl mr-36 mt-10 font-bold hover:scale-125'> Shop </button>
    </div>
    </div>

    {/* <Featured brandid={11950} /> */}

    {/* shop armani */}
    <div className='flex bg-purple-200 rounded-md h-96'>
    <div className='relative w-1/2 rounded-xl  h-full'>
        <Image src='/armani.jpg' alt='Armani image' layout='fill' objectFit='contain'   />
    </div>
    <div className='flex flex-col items-center justify-center w-1/2'>
        <h1 className='text-3xl font-bold text-wrap w-1/2'>Discover Armani</h1> 
        <h1 className='text-xl w-1/2 '> Where Style Meets Luxury</h1>
        <button className='bg-white px-10 rounded-xl mr-20 mt-10 font-bold hover:scale-125'> Shop </button>
    </div>
</div>
{/* <Featured brandid={25595}/> */}
{/* help with choice */}
<div className='h-[600px] flex items-center justify-end relative font-serif overflow-hidden'>
        <div>
        <Video url="/findclothing.mp4"/>
        </div>
        <div className='text-white font-extrabold  absolute text-5xl w-96 mr-9 break-words backdrop-blur-md'>
        <h1 className='mb-3'> Having trouble making the perfect choice? </h1>
        <h1 className='text-2xl text-red-500'>Let us help you </h1>
        </div>
        </div>

    </div>
  )
}

export default Homepage
