

import Link from "next/link";
import { Menu } from 'lucide-react';
import { logout } from "../lib/action";
import { auth } from "@/auth";


export default async function Navbar() {
    const session = await auth()
       const user =  !!session?.user;
  return (
    <nav className=" w-full bg-white shadow-sm">
      <div className="sm:w-[80%] mx-auto px-4 py-4 flex justify-between">
        <div className="brand">
             <Link href="/" className="font-bold text-xl sm:text-2xl text-1">
          HOTEL
        </Link>
             <Link href="/" className="font-bold text-gray-600 text-xl sm:text-2xl text-2">
             BOOK
        </Link>
        </div>
       
        <div className="space-x-4 menu hidden sm:block">
          <Link href="/hotels" className="nav-links text-lg font-bold">Hotels</Link>
          <Link href="/hotels/bookings" className="nav-links text-lg font-bold">Bookings</Link>
           {user ? 
           ( <form className="inline-block" 
             action={logout}
            >
            <button type="submit" className="nav-links text-lg font-bold">Logout</button>
          </form>)
          :
          <Link href="/auth/login" className="nav-links text-lg font-bold">Login</Link> }
        </div>
         <Menu className="sm:hidden" />
        
      </div>
    </nav>
  );
}
