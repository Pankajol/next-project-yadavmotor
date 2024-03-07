"use client";
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation"
import { useState } from "react";



export default function ProfilePage (){
    const router = useRouter();
    const [data,setData] = useState("nothing");

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

    const getUserDetails = async () => {
      const res = await  axios.get('/api/users/me')
      console.log(res.data);
      setData(res.data.data.username)

    }





    return(
        <div
        className="flex flex-col items-center
        justify-center min-h-screen py-2"
        >
           <h1> profile</h1>
           <hr />
            <p>Profile Page</p>
           <h2 className="p-3 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>

           <hr />
           <button onClick={logout}
           className="bg-red-400 border-2 hover:border-red-500 text-white font-bold py-2 px-4 rounded">logout</button>
           
           <button onClick={getUserDetails}
           className="bg-green-900 border-2 hover:border-green-600 text-white font-bold py-2 px-4 rounded">get Details</button>
           
        </div>
    )
}