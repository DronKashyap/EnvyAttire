"use client"

import BrandsDropdown from "./ui/BrandsDropdown";
import Image from 'next/image'; 
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Appbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-around items-center hover:text-red-500 font-extrabold backdrop-blur-md font-serif  w-full absolute z-10 h-10 hover:bg-white">
            <div className='flex text-red-500 '><Image src="/logo.png" alt="Cart" width={24} height={24} />
            EnvyAttire</div>
            <a href='/' className='p-2 backdrop-blur-3xl mr-1 shadow-black  shadow-inner hover:bg-gray-200 hover:shadow-none rounded-md'>Home</a>
            <a href='/about' className='p-2 backdrop-blur-3xl mr-1 shadow-black  shadow-inner hover:bg-gray-200 hover:shadow-none rounded-md'>About</a>
            <BrandsDropdown />
            {session ? (
          <>
           <Image src="/cart.png" alt="Cart" width={24} height={24} />
           <div className='flex'>
           <Image src="/profile.png" alt="Cart" width={24} height={24}  
           onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)} /> 
          {isOpen && (
            <div  className="absolute  top-full mt-2 bg-white border border-gray-300 shadow-md rounded-md z-20"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            > 
             <button onClick={() => signOut()} className="p-2 bg-red-500 text-white rounded">
              Sign Out
            </button>
            </div>
          )}
           <h1 className='ml-2'>Hi! {session.user?.name}</h1></div>     
          </>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="p-2 backdrop-blur-3xl mr-1 shadow-black shadow-inner hover:text-blue-900 hover:shadow-none rounded-md "
            >
              Sign In
            </button>
            <button
              onClick={() => signIn()}
              className="p-2 backdrop-blur-3xl shadow-black  shadow-inner hover:text-blue-900 hover:shadow-none rounded-md "
            >
              Sign Up
            </button>
          </div>
        )}
        </div>
    );
}
