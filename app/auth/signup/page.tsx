import SignUpForm from "@/app/ui/signup-form";


  export default function SignUp() {
    return(
      <div className="p-20">
          <h1 className="title text-2xl text-center font-bold mb-4">
        Create Your Account
      </h1>
          <SignUpForm  />
      </div>
    )
       
  }