import { auth } from "@/auth";
import Navbar from "./navbar";

async function NavWrapper() {
     const session = await auth()
       const user =  !!session?.user;
    
       return(
        <div>
            <Navbar user={user} />
        </div>
     );
}

export default NavWrapper;