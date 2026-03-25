import LogInForm from "../../ui/login-form";
import { Suspense } from 'react';

  export default function LogIn() {
    return(
      <div className="p-20">
      <Suspense fallback={<div>Loading...</div>}>
          <LogInForm />
        </Suspense>
      </div>
    )
       
  }