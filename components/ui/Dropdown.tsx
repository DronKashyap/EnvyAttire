"use client";
import { useState } from "react";

interface SubElement {
  name: string;
  subelements?: string[]; // Optional array for nested sub-elements
}

interface MenuElements {
  element: SubElement[];
  heading: string;
}

const Dropdown: React.FC<MenuElements> = ({ element, heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subOpenIndex, setSubOpenIndex] = useState<number | null>(null); // Track which sub-element is open

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 bg-transparent  hover:bg-gray-200 "
      >
        {heading}
      </button>

      {isOpen && (
        <div
          className="absolute bg-white border  border-gray-200 shadow-lg rounded-lg z-20"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ left: "50%", transform: "translateX(-50%)" }} // Center the dropdown
        >
          <div className="flex text-sm flex-row">
            {element.map((item, index) => (
              <div
                key={index}
                className="relative group mx-2" // Add margin for spacing
                onMouseEnter={() => setSubOpenIndex(index)} // Open corresponding sub-elements
                onMouseLeave={() => setSubOpenIndex(null)} // Close sub-elements when mouse leaves
              >
                <a href={`./${item.name}`} className="block text-slate-600 hover:text-black px-4 py-2 hover:bg-gray-100">
                  {item.name}
                </a>

                {/* Check if the current item has subelements and render a nested dropdown */}
                {item.subelements && subOpenIndex === index && (
                  <div className="absolute text-xs overflow-scroll top-full mt-1 bg-white border border-gray-200 shadow-lg rounded-lg z-20 " style={{ width: '700px', height:'500px' }}>
                    <div className="flex font-mono  flex-row flex-wrap text-slate-600">
                      {item.subelements.map((subitem, subIndex) => (
                        <a
                          key={subIndex}
                          href={`./${subitem}`}
                          className="flex w-52 px-4 py-2 hover:bg-gray-100 whitespace-nowrap hover:text-black hover:font-extrabold"
                        >
                          {subitem}
                        </a>
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
};

export default Dropdown;
