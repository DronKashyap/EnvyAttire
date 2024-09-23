"use client"
import { useState } from "react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="px-4 py-2 bg-transparent text-black hover:bg-gray-200"
            >
                Menu
            </button>
            {isOpen && (
                <div
                    className="absolute left-0  w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-20"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 2</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 3</a>
                </div>
            )}
        </div>
    );
}
