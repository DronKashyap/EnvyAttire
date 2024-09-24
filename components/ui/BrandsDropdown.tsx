// "use client"
// import { useState, useEffect } from 'react';
// import { fetchCategories } from '../../lib/fetchdata';
// import Dropdown from './Dropdown';

// function BrandsDropdown() {
//   const [data, setData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { brandsData } = await fetchCategories();

  
//       const brandWithChildren = brandsData.map((brand: any) => ({
//         name: brand.brandTitle, 
//         subelements: brand.categories.map((child: any) => child.categoryTitle), 
//       }));

//       setData(brandWithChildren);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Dropdown heading="Brands" element={data} />
//     </div>
//   );
// }

// export default BrandsDropdown;
