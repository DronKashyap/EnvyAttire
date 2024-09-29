"use client";
import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../lib/fetchdata";
import ProductCard from "./ui/Productcard";

interface FeaturedProps {
  brandid: number;
}

const Featured: React.FC<FeaturedProps> = ({ brandid }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProductsByCategory(brandid);
        setData(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [brandid]);

  const handleProductClick = (productId: number) => {
    console.log(`Product clicked: ${productId}`);
  };

  return (
    <div>
      <div className="flex justify-between">
        {data.slice(0, 4).map((product) => ( 
          <ProductCard 
            key={product.productId} 
            id={product.productId} 
            name={product.name}
            imgurl={product.imageUrl}
            price={product.price}
            onClick={() => handleProductClick(product.id)} 
          />
        ))}
      </div>
      <div className="flex justify-end">
        <a href={`/brands/${brandid}`} className="font-bold text-red-500 underline text-m">
          Browse more products
        </a>
      </div>
    </div>
  );
};

export default Featured;


