'use client';

import { useActionState } from "react";
import { signUp, SignupState } from "../lib/action";
import Link from "next/link";


export default function SignUpForm() {
    const initialState: SignupState = { message: null, errors: {} };
const [state, formAction, isPending] = useActionState(signUp, initialState);
    return(
        <form action={formAction}>
      <div className="max-w-xl mx-auto border border-gray-100 rounded-lg  shadow-sm">
        <div className="form-title-box block">
          <h2 className=" text-3xl font-bold text-white mt-3 mb-6 text-center">Sign Up</h2>
        </div>
        <div className="input-fields p-4">
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
        <div className="mb-4">
          <label htmlFor="name" className="block label text-lg font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="w-full text-gray-600 p-2 rounded-md input-field"
            required
          />
        </div>
        </div>
        
        <button
          type="submit"
          className=" submit-btn block mt-4 w-50 px-2 py-2 text-xl mx-auto  text-white font-bold rounded aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          aria-disabled={isPending}
        >
          SignUp
        </button>
          {state?.message &&
         (
            <p className="mt-2 text-sm text-red-500" >
              {state.message}
            </p> )}
           <p className="nav-text mt-4 mb-4 text-center">Have an account? <Link href="/auth/login" className="ml-2 login-link hover:underline">LogIn</Link></p> 
       
      </div>
    </form>
    )
}