

import { auth, signOut } from "@/auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth()
  const user =  !!session?.user;
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <div className="brand">
             <Link href="/" className="font-bold text-2xl text-1">
          HOTEL
        </Link>
             <Link href="/" className="font-bold text-gray-600 text-2xl text-2">
             BOOK
        </Link>
        </div>
       
        <div className="space-x-4 menu hidden md:block">
          <Link href="/hotels" className="nav-links text-xl font-medium">Hotels</Link>
          <Link href="/hotels/bookings" className="nav-links text-xl font-medium">Bookings</Link>
          {user ? (
            <form className="inline-block" 
             action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
            >
            <button type="submit" className="nav-links text-xl font-medium">Logout</button>
          </form>
          ):
          <Link href="/auth/login" className="nav-links text-xl font-medium">Login</Link>
          }
          
        </div>
      </div>
    </nav>
  );
}
