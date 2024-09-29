"use client";
import { useEffect, useState } from 'react';
import { fetchProductdetails } from "../../../lib/fetchdata";
import Qtybutton from "@/components/ui/Qtybutton";
import Image from "next/image";

interface Product {
  productId: number;
  name: string;
  price: number;
  description: string;
  images: { imageUrl: string }[];  
}

function ProductPage({ params }: { params: { productId: string } }) {
  const productId = parseInt(params.productId, 10);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
 console.log("productid:",productId)
  useEffect(() => {
    if (isNaN(productId)) {
      setError("Invalid product ID");
      return;
    }

    const fetchProduct = async () => {
      try {
        console.log("Fetching product details for ProductId:", productId);
        const fetchedProductdetails = await fetchProductdetails(productId);

        if (!fetchedProductdetails) {
          setError("No product found for this ID.");
        } else {
          setProduct(fetchedProductdetails);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details. Please try again later.");
      }
    };

    fetchProduct();
  }, [productId]);

  console.log("Product details:", product);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>; 
  }

  const { name, price, description, images } = product; 
  const productImage = images[0]?.imageUrl || '/sampleproductpic.jpg'; 

  return (
    <div className="py-16 flex bg-gradient-to-br from-blue-100 via-green-100 to-purple-100">
      {/* Product image slider */}
      <div className="relative h-[600px] w-1/2">
        <Image 
          src={productImage.startsWith('http') ? productImage : `http://${productImage}`} 
          alt={name} 
          layout="fill" 
          objectFit="contain"
        />
      </div>

      {/* Product information */}
      <div className="w-1/2 px-8">
        <h1 className="text-3xl font-bold mb-5">{name}</h1>
        <div 
          className="border-b border-gray-300 pb-2"
          dangerouslySetInnerHTML={{ __html: description || 'No description available for this product.' }} 
        />
        <h3 className="text-2xl font-bold mt-7 border-b border-gray-300 pb-2 mb-4">
          Price: ${price}
        </h3>
        
        {/* Quantity button and Add to Cart */}
        <h1 className="pb-2">Choose a quantity:</h1>
        <div className="flex justify-between items-center">
          <Qtybutton />
          <button className='border-red-500 mr-10 border-2 p-1 rounded-2xl text-red-500 bg-white hover:bg-red-500 hover:text-white'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
