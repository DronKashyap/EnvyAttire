// "use client"
// import { useEffect, useState } from 'react';
// import { fetchProductsByCategory } from '../../../lib/fetchdata';
// const AdidasProductImages: React.FC = () => {
//   const [productImages, setProductImages] = useState<{ imageUrl: string, productName: string }[]>([]);

//   useEffect(() => {
//     // Fetch products from Adidas category
//     const fetchProducts = async () => {
//       try {
//         const categoryId = 7113; // Adidas Category ID
//         const products = await fetchProductsByCategory(categoryId);
//         console.log('Products:', products);
//         // Store product image URLs and names
//         setProductImages(
//           products.map((product: any) => ({
//             imageUrl: product.imageUrl.startsWith('http')
//               ? product.imageUrl
//               : `https://${product.imageUrl}`, // Prepend 'https://' if missing
//             productName: product.name || 'Unknown Product' // Ensure there is a product name
//           }))
//         );
//       } catch (error) {
//         console.error('Error fetching Adidas products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Adidas Products</h1>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
//         {productImages.map((product, index) => (
//           <div key={index}>
//             {/* Ensure imageUrl is not empty */}
//             {product.imageUrl ? (
//               <img src={product.imageUrl} alt={product.productName} style={{ width: '100%' }} />
//             ) : (
//               <p>No image available</p>
//             )}
//             <p>{product.productName}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdidasProductImages;