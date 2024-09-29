"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ui/Productcard';
import Discount from "@/components/ui/Discount";
import { fetchProductsByCategory } from "../../../lib/fetchdata";

interface Product {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
}

export default function BrandProductsPage({ params }: { params: { brandId: string } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const brandId = parseInt(params.brandId, 10);
  const router = useRouter();

  useEffect(() => {
    if (isNaN(brandId)) {
      setError("Invalid brand ID");
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await fetchProductsByCategory(brandId);

        if (!fetchedProducts || fetchedProducts.length === 0) {
          setError("No products found for this brand.");
        } else {
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [brandId]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className='py-16 bg-gradient-to-br from-blue-100 via-green-100 to-purple-100'>
      <Discount />
      <div className="grid grid-cols-3 gap-4">
        {currentProducts.map((product: Product) => (
          <ProductCard 
            key={product.productId}  // Use productId here
            id={product.productId}   // Pass productId to ProductCard
            name={product.name} 
            price={product.price} 
            imgurl={product.imageUrl}
            onClick={() => {
              console.log("Navigating to product ID:", product.productId);  // Log productId for debugging
              router.push(`/products/${product.productId}`);  // Correct productId usage in route
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-2 px-4 py-2 border rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
