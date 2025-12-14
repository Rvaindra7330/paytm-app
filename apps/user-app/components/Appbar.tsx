"use client"
import { signIn,signOut, useSession } from "next-auth/react"


export const Appbar=()=>{
    const session = useSession()
    return <div className="bg-slate-500">
        <button onClick={()=>{
            signIn()
        }}>Signin</button>
        <button onClick={()=>{
            signOut()
        }}>logout</button>
    {JSON.stringify(session)}
    </div>
}