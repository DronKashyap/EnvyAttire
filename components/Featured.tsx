// "use client";
// import { useState, useEffect } from "react";
// import { fetchProductsByCategory } from "../lib/fetchdata";
// import ProductCard from "./ui/Productcard";

// interface FeaturedProps {
//   brandid:number;
// }


// const Featured: React.FC<FeaturedProps> = ({ brandid }) => {

//   const [data, setData] = useState<any[]>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productsData = await fetchProductsByCategory(brandid); // Directly use the fetched data
//         setData(productsData); // Set the state with the fetched data
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchData();
//   }, [brandid]);

//     console.log(data);
//   return (
//     <div>
//       <div className="flex justify-between">
//         {data.slice(0, 4).map((product, index) => ( // Limit to first 4 products
//           <ProductCard 
//             key={index}
//             name={product.name}
//             imgurl={product.imageUrl}
//             price={product.price}
//           />
//         ))}
//       </div>
//       <div className="flex justify-end">
//        <a href={`/brands/${brandid}`} className="font-bold text-red-500 underline text-m" > Browse more products </a> 
//       </div>
//     </div>
//   )
// }

// export default Featured
