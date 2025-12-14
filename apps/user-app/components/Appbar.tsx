"use client"
import { signIn,signOut, useSession } from "next-auth/react"


export const Appbar=()=>{
    const session = useSession()
    return <div className="flex justify-between h-15">
        <div className="pt-4 pl-2">
          Paytm
        </div>
        <div className="pt-4 pr-2">
        <button type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none" onClick={()=>{
            signIn()
        }}>Signin</button>
        <button type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none" onClick={()=>{
            signOut()
        }}>logout</button>
        </div>
        
    {/* {JSON.stringify(session)} */}
    </div>
}