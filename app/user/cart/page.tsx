'use client';

import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchProductdetails } from '@/lib/fetchdata';

const CartPage = () => {
  const { data: session, status } = useSession();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (session && session.user && session.user.email) {
        try {
          const res = await fetch(`/api/cart?email=${session.user.email}`);
          const productIds = await res.json();

          if (Array.isArray(productIds) && productIds.length > 0) {
            const products = await Promise.all(
              productIds.map(async (productId: number) => {
                return await fetchProductdetails(productId);
              })
            );
            setCartItems(products);
          } else {
            setCartItems([]);
          }
        } catch (error) {
          console.error('Error fetching cart items:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [session]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session || !session.user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>Please sign in to continue.</p>
        <button
          onClick={() => signIn()}
          className="mt-4 border border-blue-500 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <h2>Number of items in cart: {cartItems.length}</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => {
            
            const imageUrl = item?.images?.[0]?.imageUrl?.startsWith('http')
              ? item.images[0].imageUrl
              : `https://${item.images?.[0]?.imageUrl || 'placeholder.png'}`;

        
            const price = typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A';

            return (
              <li key={item.productId} className="flex justify-between py-2">
                <div className="flex items-center">
                  <Image
                    src={imageUrl}
                    alt={item.name || 'Product Image'}
                    width={100}
                    height={200}
                    className="object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>${price}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className='flex justify-center'>
      <button className=' px-2 py-36 text-white font-bold bg-blue-500' onClick={()=> alert("payment gateway coming soon! Stay tuned")}> Place order! </button> 
      </div>
    </div>
  );
};

export default CartPage;
