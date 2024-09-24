"use client"

// import BrandsDropdown from "./ui/BrandsDropdown";
import Image from 'next/image'; 
import { useSession, signIn, signOut } from 'next-auth/react';


export default function Appbar() {
    const { data: session } = useSession();
    return (
        <div className="flex justify-around items-center hover:text-red-500 font-extrabold backdrop-blur-md font-serif  w-full absolute z-10 h-10 hover:bg-white">
            <div className='flex text-red-500 '><Image src="/logo.png" alt="Cart" width={24} height={24} />
            EnvyAttire</div>
            <h1>Home</h1>
            <h1>About</h1>
            {/* <BrandsDropdown /> */}
            <div className="flex"> 
            <input placeholder="Search..." className="bg-transparent ml-2" />
            <Image src="/search.png" alt="Cart" width={24} height={24} />
            </div>
            {session ? (
          <>
           <Image src="/cart.png" alt="Cart" width={24} height={24} />
           <Image src="/profile.png" alt="Cart" width={24} height={24} />
            <button onClick={() => signOut()} className="p-2 bg-red-500 rounded">
              Sign Out
            </button>
          </>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="p-2 backdrop-blur-3xl mr-1 shadow-black shadow-2xl shadow-inner hover:text-blue-900 hover:shadow-none rounded-md "
            >
              Sign In
            </button>
            <button
              onClick={() => signIn()}
              className="p-2 backdrop-blur-3xl shadow-black shadow-2xl shadow-inner hover:text-blue-900 hover:shadow-none rounded-md "
            >
              Sign Up
            </button>
          </div>
        )}
        </div>
    );
}
