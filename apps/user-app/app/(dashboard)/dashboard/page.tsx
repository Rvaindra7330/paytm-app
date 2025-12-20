"use client"
import { Button } from "@repo/ui/src/button"
import { Card } from "@repo/ui/src/card"
import { useRouter } from "next/navigation"

export default function() {
    const router= useRouter()
    return <div >
        <div className="flex  justify-center text-3xl font-bold text-[#6a51a6] pb-10 pt-3">
            Quick actions, secure payments
        </div>
        <div className="flex  justify-center pt-20">
            <Button onClick={()=>{router.push("/transfer")}}>Add Money</Button>
        <Button onClick={()=>{router.push("/p2p")}}>Send Money to a friend</Button>
         <Button onClick={()=>{router.push("/transactions")}}>See All Transactions</Button>
        </div>
        
    </div>
}