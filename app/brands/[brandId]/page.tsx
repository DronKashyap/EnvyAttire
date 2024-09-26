// import Discount from "@/components/ui/Discount";
// import { fetchProductsByCategory } from "../../../lib/fetchdata";

// export default async function BrandProductsPage({ params }: { params: { brandId: string } }) {
//   console.log("Full params object:", params); // Log the entire params object

//   // Correctly use `brandId` from params
//   const brandId = parseInt(params.brandId, 10);

//   if (isNaN(brandId)) {
//     console.error("Invalid brand ID:", params.brandId); // Log invalid brandId
//     return <p>Invalid brand ID.</p>;
//   }

//   console.log("Fetching products for brandId:", brandId); // Log before API call

//   try {
//     const products = await fetchProductsByCategory(brandId);

//     console.log("Fetched products:", products); // Log the fetched products data

//     if (!products || products.length === 0) {
//       console.warn("No products found for brandId:", brandId); // Warn if no products are found
//       return <p>No products found for this brand.</p>;
//     }

//     return (
//       <div>
//         <Discount />
//         <h1>Products for Brand ID: {brandId}</h1>
//         <p>Total Products: {products.length}</p>
//         <ul>
//           {products.map((product: any) => (
//             <li key={product.productId}>
//               <strong>ID:</strong> {product.productId} - <strong>Name:</strong> {product.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching products for brandId:", brandId, "Error:", error); // Log the error details
//     return <p>Failed to fetch products. Please try again later.</p>;
//   }
// }
