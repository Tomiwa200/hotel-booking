"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { logout } from "../lib/action";

export default function Navbar({ user }: { user: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <nav className=" w-full bg-white shadow-sm">
      <div className="sm:w-[80%] mx-auto px-4 py-4 flex justify-between">
        <div className="brand">
          <Link href="/" className="font-bold text-xl sm:text-2xl text-1">
            HOTEL
          </Link>
          <Link
            href="/"
            className="font-bold text-gray-600 text-xl sm:text-2xl text-2"
          >
            BOOK
          </Link>
        </div>

        <div className="space-x-4 menu hidden sm:block">
          <Link href="/hotels" className="nav-links text-lg font-bold">
            Hotels
          </Link>
          <Link href="/hotels/bookings" className="nav-links text-lg font-bold">
            Bookings
          </Link>
          {user ? (
            <form className="inline-block" action={logout}>
              <button type="submit" className="nav-links text-lg font-bold">
                Logout
              </button>
            </form>
          ) : (
            <Link href="/auth/login" className="nav-links text-lg font-bold">
              Login
            </Link>
          )}
        </div>
        <button className="sm:hidden" onClick={toggleDrawer}>
          <Menu  />
        </button>
        
      </div>

          {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden"
          onClick={toggleDrawer}
        />
      )} 

      <div className={`fixed top-0 right-0 h-full w-64  z-50 shadow-lg bg-white 
        transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 text-lg">
          <Link href="/hotels" onClick={toggleDrawer} className="nav-links">
            Hotels
          </Link>
          <Link href="/hotels/bookings" onClick={toggleDrawer} className="nav-links">
            Bookings
          </Link>
          {user ? (
            <form className="inline-block" action={logout}>
              <button type="submit" onClick={toggleDrawer} className="nav-links">
                Logout
              </button>
            </form>
          ) : (
            <Link href="/auth/login" onClick={toggleDrawer} className="nav-links">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
