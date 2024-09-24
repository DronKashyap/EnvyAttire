import Image from 'next/image';

function Discount() {
  return (
    <div className='relative bg-red-300 flex  justify-between h-60 rounded-md'>
        <div className='flex flex-col justify-center items-center ml-24 '>
        <h1 className='text-6xl'>Get 20% Discount on your first order</h1>
        <button className='border-2 px-6 py-1 border-red-500 text-red-500 rounded-2xl bg-red-50 hover:text-white hover:bg-red-500 '> Log in </button>
        </div>
        <div className='relative  h-full w-1/3'>
        <Image src='/woman.png' alt='image' layout='fill' objectFit='contain'/>
        </div>
    </div>
  )
}

export default Discount
