import LogInForm from "../../ui/login-form";
import { Suspense } from 'react';

  export default function LogIn() {
    return(
      <div className="flex justify-center items-center h-screen">
      <Suspense fallback={<div>Loading...</div>}>
          <LogInForm />
        </Suspense>
      </div>
    )
       
  }