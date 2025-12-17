import { Card } from "@repo/ui/src/card"


export const OnRampTransactions=({transactions}:{
    transactions:{
        time: Date,
        amount:number,
        status:string,
        provider:string
    }[]
})=>{
    if(!transactions.length){
        return <Card title="Recent Transactions">
            <div>
                No Recent Transactions
            </div>

        </Card>
    }
    return <Card title={"Recent Transactions"}>
        {transactions.map(t=><div className="flex justify-between border-b border-slate-300">
            <div>
                <div>
                    Received INR
                </div>
                <div>
                    {t.time.toDateString()}
                </div>
                
            </div>
            <div>
                + Rs {t.amount/100}
            </div>
        </div>)}
        

    </Card>
}