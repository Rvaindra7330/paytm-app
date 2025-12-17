"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/db/dist"

export const createOnRampTransaction= async (amount:number,provider:string)=>{
    const session = await getServerSession(authOptions)
    const userId= session.user.id
    const token = Math.random().toString();
     if (!userId) {
        return {
            message: "User not logged in"
        }
    }
    await prisma.OnRampTransaction.create({
       data:{
        userId:Number(userId),
        startTime:new Date(),
        status:"Processing",
        amount:amount,
        provider,
        token:token

       } 
    })
    return{
        message:"On ramp transaction added"
    }
}