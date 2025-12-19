import { prisma } from "@repo/db"
import { authOptions } from "app/lib/auth"
import { PeerTransactions } from "components/PeerTransactions"
import { getServerSession } from "next-auth"

async function getSTransactions(){
        const session = await getServerSession(authOptions)
        const txn= await prisma.p2pTransfer.findMany({
            where:{fromUserId:Number(session.user.id)}
        })
        return txn.map((t:any)=>({
             time: t.timestamp,
        amount: t.amount,
        }))
    }
    async function getRTransactions(){
        const session = await getServerSession(authOptions)
        const txn = await prisma.p2pTransfer.findMany({
            where:{toUserId:Number(session.user.id)}
        })
        return txn.map((t:any)=>({
            time:t.timestamp,
            amount:t.amount
        }))
    }
export default async function(){
    
    const stransactions= await getSTransactions()
    const rtransactions= await getRTransactions()
    return <div className="width-screen pl-5 ">
       <PeerTransactions stransactions={stransactions} rtransactions={rtransactions}></PeerTransactions>
    </div>
}