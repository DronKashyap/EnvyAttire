// import Image from 'next/image';

// interface ProductCardProps {
//   price: number;
//   imgurl: string;
//   name: string;
// }

// const Productcard: React.FC<ProductCardProps> = ({ name, price, imgurl }) => {
//   return (
//     <div className='flex flex-col relative h-[100px] border-2 p-2 w-[300px]'>
//       <div className='relative h-full w-full'>
//         <Image 
//           src={imgurl} 
//           alt={name} 
//           layout='fill' 
//           objectFit='contain' 
//           className='rounded-t-lg'
//         />
//       </div>
//       <div className='flex justify-between p-2'> 
//         <h1 className='text-lg font-semibold'>{name}</h1>
//         <h1 className='text-lg font-semibold'>${price}</h1>
//       </div>
//       <button className='border-red-500 border-2 p-1 rounded-2xl text-red-500 bg-white hover:bg-red-500 hover:text-white'>
//         Add to cart
//       </button>
//     </div>
//   );
// }

// export default Productcard;

import Image from 'next/image';

function ProductCard() {
  return (
    <div className='flex flex-col  relative h-[500px] p-2 w-[300px]'>
      <div className='relative  rounded-3xl h-full w-full overflow-hidden'>
        <Image 
          src="/sampleproductpic.jpg" 
          alt="product" 
          layout='fill' 
          objectFit='contain' 
          
        />
      </div>
      <div className='flex justify-between p-2'> 
        <h1 className='text-lg font-semibold'>Product Name</h1>
        <h1 className='text-lg font-semibold'>$100</h1>
      </div>
      <button className='border-red-500 border-2 p-1 rounded-2xl text-red-500 bg-white hover:bg-red-500 hover:text-white'>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
