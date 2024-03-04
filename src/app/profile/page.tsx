"use client";
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation"



export default function ProfilePage (){
    const router = useRouter();

    const logout = async () =>{
              await axios.get('/api/users/logout')
              toast.success('Logout successful')
              router.push('/login')

        try {
            
        } catch (error:any) {

            console.log(error.message);

            toast.error(error.message)
            
        }

    }



    return(
        <div
        className="flex flex-col items-center
        justify-center min-h-screen py-2"
        >
           <h1> profile page</h1>
           <hr />

           <p>{}</p>

           <hr />
           <button onClick={logout}
           className="bg-red-400 border-2 hover:border-red-500 text-white font-bold py-2 px-4 rounded">logout</button>
           
        </div>
    )
}