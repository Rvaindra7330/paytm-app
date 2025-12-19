import { prisma } from "@repo/db";
import { authOptions } from "app/lib/auth";
import { AddMoney } from "components/AddmoneyCard";
import { Balance } from "components/BalanceCard";
import { OnRampTransactions } from "components/OnRampTransactions";
import { getServerSession } from "next-auth";

async function getBalance(){
    const session = await getServerSession(authOptions)
    const balance= await prisma.balance.findFirst({
        where:{
            userId:Number(session?.user?.id)
        }
    })
     return{
            amount:balance?.amount,
            locked:balance?.locked
        }
}
async function getTransactions(){
    const session = await getServerSession(authOptions)
    const txn= await prisma.OnRampTransaction.findMany({
        where:{
            userId:Number(session?.user?.id)
        }
    })
    return txn.map((t:any)=>({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}
export default async function(){
    
    const balance= await getBalance()
    const transactions= await getTransactions()
    return <div className="width-screen pl-5 ">
        <div className="text-xl font-bold text-[#6a51a6] pb-10 pt-3">
            Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 ">
            <div>
                <AddMoney/>
            </div>
            <div>
                <Balance amount={balance.amount} locked={balance.locked}/>
                <div className="pt-4"><OnRampTransactions transactions={transactions}/></div>
            </div>
        </div>
       <div>
        
       </div>
    </div>
}