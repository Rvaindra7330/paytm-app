"use client"
import { signIn,signOut, useSession } from "next-auth/react"


export const Appbar=()=>{
    const session = useSession()
    return <div className="bg-slate-500">
        <h1 className="text-3xl font-bold underline text-green-800">
      Hello world!
    </h1>
        <button onClick={()=>{
            signIn()
        }}>Signin</button>
        <button onClick={()=>{
            signOut()
        }}>logout</button>
    {JSON.stringify(session)}
    </div>
}