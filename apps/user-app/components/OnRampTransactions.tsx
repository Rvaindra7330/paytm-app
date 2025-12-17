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
                <div className="text-xs text-slate-600">
                    {t.time.toDateString()}
                </div>
                
            </div>
            <div className="flex flex-col justify-center">
                + RS {t.amount/100}
            </div>
        </div>)}
        

    </Card>
}