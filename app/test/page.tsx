// // app/test/page.tsx
// "use client"
// import { useState, useEffect } from 'react';
// import { fetchCategories, fetchProductsByCategory } from '../../lib/fetchdata';

// const TestPage = () => {
//   const [brands, setBrands] = useState<any[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     // Fetch brand data on component mount
//     const fetchData = async () => {
//       const { brandsData } = await fetchCategories();
//       setBrands(brandsData);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Fetch products when a category is selected
//     const fetchProducts = async () => {
//       if (selectedCategory) {
//         const productsData = await fetchProductsByCategory(selectedCategory);
//         setProducts(productsData);
//       }
//     };
//     fetchProducts();
//   }, [selectedCategory]);

//   return (
//     <div>
//       <h1>Brand Categories and Products</h1>

//       {brands.map((brand) => (
//         <div key={brand.brandTitle} className='bg-yellow-200 m-2 p-2'>
//           {/* Dropdown for brand */}
//           <details>
//             <summary className='text-red-800 font-extrabold'>{brand.brandTitle}</summary>
//             <ul className='bg-blue-200 p-2'>
//               {/* Dropdown for each category */}
//               {brand.categories.map((category:any) => (
//                 <li key={category.categoryId} className='text-green-700'>
//                   <button
//                     className='text-blue-700 underline'
//                     onClick={() => setSelectedCategory(category.categoryId)}
//                   >
//                     {category.categoryTitle} (ID: {category.categoryId})
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </details>

//           {/* Product list for the selected category */}
//           {selectedCategory && (
//             <div className='mt-4 bg-gray-100 p-2'>
//               <h3>Products in Selected Category:</h3>
//               <ul>
//                 {products.map((product) => (
//                   <li key={product.productId}>
//                     <img src={product.imageUrl} alt={product.color} width="50" />
//                     <p>
//                       {product.color} - Price: {product.price}$
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TestPage;
