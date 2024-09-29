"use client";
import { useState, useEffect } from "react";
import { fetchCategories } from "../../lib/fetchdata";
import { useRouter } from "next/navigation";

function BrandsDropdown() {
  const [data, setData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [subOpenIndex, setSubOpenIndex] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { brandsData } = await fetchCategories();

      const brandWithChildren = brandsData.map((brand: any) => ({
        name: brand.brandTitle,
        subelements: brand.categories.map((child: any) => ({
          name: child.categoryTitle,
          id: child.categoryId,
        })),
      }));

      setData(brandWithChildren);
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/brands/${categoryId}`);
  };

  return (
    <div className="relative">
      {/* Brands button */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 bg-transparent hover:bg-gray-200  shadow-black  shadow-inner rounded-md"
      >
        Brands
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute bg-white border border-gray-200 shadow-lg rounded-lg z-20 mt-2"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="flex max-w-screen-md text-sm">
            {data.map((brand, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setSubOpenIndex(index)}
                onMouseLeave={() => setSubOpenIndex(null)}
              >
                {/* Brand Name */}
                <div className="cursor-pointer px-4 py-2 text-slate-600 hover:text-black hover:bg-gray-100">
                  {brand.name}
                </div>

                {/* Nested Dropdown for Sub-Elements */}
                {subOpenIndex === index && brand.subelements.length > 0 && (
                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg z-30 ml-2">
                    <div className="flex w-[500px] flex-wrap h-[400px] overflow-y-scroll">
                      {brand.subelements.map((subitem: any, subIndex: any) => (
                        <div
                          key={subIndex}
                          onClick={() => handleCategoryClick(subitem.id)}
                          className="block px-4 py-2 text-slate-600 w-28 hover:bg-gray-100 hover:text-black cursor-pointer"
                        >
                          {subitem.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BrandsDropdown;
