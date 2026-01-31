import LogInForm from "../../ui/login-form";
import "./style.css";
import { Suspense } from 'react';

  export default function LogIn() {
    return(
      <div className="p-20">
          <h1 className="title text-2xl text-center font-bold mb-4">
        Please LogIn To Continue
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
          <LogInForm />
        </Suspense>
      </div>
    )
       
  }