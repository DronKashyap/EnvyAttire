import Dropdown from "./ui/Dropdown";
import { Loginbtn } from "./ui/loginbtn";
import Image from 'next/image'; // Import the Image component from Next.js

export default function Appbar() {
    return (
        <div className="flex justify-around items-center font-extrabold backdrop-blur-md font-serif  w-full absolute z-10 h-10 hover:bg-white">
            <Image src="/logo.png" alt="Cart" width={24} height={24} />
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Brands</h1>
            <Dropdown />
            <div className="flex"> 
            <input placeholder="Search..." className="bg-transparent ml-2" />
            <Image src="/search.png" alt="Cart" width={24} height={24} />
            </div>
            <Loginbtn />
            <Image src="/cart.png" alt="Cart" width={24} height={24} />
            <Image src="/profile.png" alt="Cart" width={24} height={24} />
        </div>
    );
}
