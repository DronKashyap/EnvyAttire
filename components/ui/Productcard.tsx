import Image from 'next/image';
import { useSession } from 'next-auth/react'; 
import { useState } from 'react';


interface ProductCardProps {
  id: number;  
  price: number;
  imgurl: string;
  name: string;
  onClick: () => void; 
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imgurl, onClick }) => {
  const { data: session } = useSession(); 
  const [loading, setLoading] = useState(false); 

  const absoluteImgUrl = imgurl && !imgurl.startsWith('http') ? `http://${imgurl}` : imgurl;
  const addToCart = async () => {
    if (!session || !session.user || !session.user.email) {

      window.location.href = '/signup';
      return;
    }

    setLoading(true); 

    try {
      console.log("Sending product ID to server:", id);
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: id }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log("Product added to cart:", user);
        alert("Product added to cart successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error adding to cart:", errorData);
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred while adding to cart.");
    } finally {
      setLoading(false); 
    }
  };
  
  return (
    <div 
      className='flex flex-col relative h-[500px] p-2 w-[300px] '
      onClick={() => {
        console.log("Clicked product ID:", id);  
        onClick();
      }}
    >
      <div className='relative rounded-3xl h-full w-full overflow-hidden'>
        <Image 
          src={absoluteImgUrl || '/placeholder.png'}
          alt="product" 
          fill
          className="object-cover rounded-md" 
        />
      </div>
      <div className='flex justify-between p-2'> 
        <h1 className='text-m font-semibold'>{name}</h1>
        <h1 className='text-lg font-semibold'>${price}</h1>
      </div>
      <button 
        className='border-red-500 border-2 p-1 rounded-2xl text-red-500 bg-white hover:bg-red-500 hover:text-white'
        onClick={(e) => {
          e.stopPropagation(); 
          addToCart();
        }}
        disabled={loading} 
      >
        {loading ? 'Adding...' : 'Add to cart'}
      </button>
    </div>
  );
};

export default ProductCard;
