"use client";



import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "../lib/action";
import Link from "next/link";

export default function LogInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form action={formAction}>
      <div className="max-w-xl mx-auto border border-gray-100 p-6 rounded-lg  shadow-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block label text-lg font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full text-gray-600 p-2 rounded-md input-field"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block label text-lg font-medium">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full text-gray-600 p-2 rounded-md input-field"
            required
            minLength={6}
          />
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          type="submit"
          aria-disabled={isPending}
          className=" submit-btn block mt-8  w-50 px-2 py-2 text-xl mx-auto  text-white font-bold rounded aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          LogIn
        </button>

        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      
          <p className="nav-text mt-6 text-center">Don't have an account? <Link href="/auth/signup" className="ml-2 nav-link">SignUp</Link></p> 
  
        
      </div>
    </form>
  );
}
