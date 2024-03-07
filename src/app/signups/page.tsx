"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Spotlight } from "@/components/ui/Spotlight";




export default function SignupPage(){
    const router = useRouter();
    const [user ,setUser] = React.useState({
        email:"",
        password:"",
        username:"",
        phone_no:"",
    })

    const [buttonDisable,setButtonDisable] = React.useState(false);
    const [loading ,setLoading] = React.useState(false);
    const onSignup = async () => {
      try {
        setLoading(true);

        const response = await axios.post("/api/users/signup", user);

        console.log("Signup success",response.data);
        router.push("/logins");
        
      } catch (error : any) {
        console.log("Signup failed",error.message);
         toast.error(error.message);
      } finally{
        setLoading(false);
      }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0
            && user.username.length >0 && user.phone_no.length > 0){
                setButtonDisable(false);
            } else{
                setButtonDisable(true);
            }

    },[user]);


    return(
      <div className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white dark:bg-gray-900">
      <div
      className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-0"
      >
          <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-40"
          fill="white"
        />
        <div className="flex flex-col items-center
        justify-center min-h-screen py-2">
            <h1>signup page</h1>
            <hr />
            <h1>{loading ? "processing" : "Signup"}</h1>
            <label htmlFor="username">username</label>
            <input
            className="p-2 text-black"
             id="username"
             type="text" 
             value={user.username}
             onChange={(e)=> setUser({...user,username:e.target.value})}
             placeholder="username"
             />
              <hr />
            <label htmlFor="email">email</label>
            <input
            className="p-2 text-black"
             id="email"
             type="text" 
             value={user.email}
             onChange={(e)=> setUser({...user,email:e.target.value})}
             placeholder="email"
             />
              <hr />
            <label htmlFor="password">password</label>
            <input
            className="p-2 text-black"
             id="password"
             type="password" 
             value={user.password}
             onChange={(e)=> setUser({...user,password:e.target.value})}
             placeholder="password"
             />
              <hr />
            <label htmlFor="phone_no">phone_no</label>
            <input
            className="p-2 text-black"
             id="phone_no"
             type="number" 
             value={user.phone_no}
             onChange={(e)=> setUser({...user,phone_no:e.target.value})}
             placeholder="phone_no"
             />
            <hr />
             <button
             onClick={onSignup}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
              focus:border-gray-600">{buttonDisable ? "No signup" : "Signup"}</button>
              <Link href="/logins">here to login</Link>
        </div>
        </div>
        </div>
    )
}