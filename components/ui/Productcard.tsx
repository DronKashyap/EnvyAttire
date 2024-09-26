import Image from 'next/image';

interface ProductCardProps {
  price: number;
  imgurl: string;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imgurl }) => {
  const absoluteImgUrl = imgurl.startsWith('http') ? imgurl : `https://${imgurl}`;
  return (
    <div className='flex flex-col  relative h-[500px] p-2 w-[300px]'>
      <div className='relative  rounded-3xl h-full w-full overflow-hidden'>
        <Image 
          src={absoluteImgUrl}
          alt="product" 
          fill
          className="object-cover rounded-md" 
          
        />
      </div>
      <div className='flex justify-between p-2'> 
        <h1 className='text-m font-semibold'>{name}</h1>
        <h1 className='text-lg font-semibold'>${price}</h1>
      </div>
      <button className='border-red-500 border-2 p-1 rounded-2xl text-red-500 bg-white hover:bg-red-500 hover:text-white'>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
