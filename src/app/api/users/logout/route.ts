import { NextResponse } from "next/server";

export async function GET(){
    try {
        
        const respons = NextResponse.json(
            {
                message :"logout successful",
                success: true,
            }
        )

        
        respons.cookies.set("token", "",{httpOnly:true, expires:new Date(0)})
        return respons;

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status :500})
    }
}