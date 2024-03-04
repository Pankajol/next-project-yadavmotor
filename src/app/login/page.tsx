"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



export default function LoginPage(){
    const router = useRouter();
    const [user ,setUser] = React.useState({
        username:"",
        password:"",
      
       
    })

    const [buttonDisabled, setButtonDisable] = React.useState(false);
    const [loading , setLoading] = React.useState(false);



    const onLogin = async () =>{
        try {

            setLoading(true);
            const response = await axios.post("/api/users/login",user)
            console.log("login success",response.data);
            toast.success("login success");
            router.push("/profile");
            
        } catch (error: any) {
            console.log("login failed", error.message);
            toast.error(error.message)
            
        } finally{
            setLoading(false);
        }


    }

    useEffect(()=>{
        if(user.username.length > 0 && user.password.length > 0){
            setButtonDisable(false);
        } else{
            setButtonDisable(true);
        }
    },[user]);
    return(
        <div className="flex flex-col items-center
        justify-center min-h-screen py-2">
            <h1>{loading ? "loading" : "login"}</h1>
            
              <hr />
            <label htmlFor="username">username</label>
            <input
            className="p-2"
             id="username"
             type="text" 
             value={user.username}
             onChange={(e)=> setUser({...user,username:e.target.value})}
             placeholder="username"
             />
              <hr />
            <label htmlFor="password">password</label>
            <input
            className="p-2"
             id="password"
             type="password" 
             value={user.password}
             onChange={(e)=> setUser({...user,password:e.target.value})}
             placeholder="password"
             />
              
            <hr />
             <button
             onClick={onLogin}
              className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
              focus:border-gray-600">{buttonDisabled ? "No login" :"login"}</button>
              <Link href="/signup">Registration here</Link>
        </div>
    )
}