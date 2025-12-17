import { Card } from "@repo/ui/src/card"

export const OnRampTransactions=()=>{
    return <Card title={"Recent Transactions"}>
        <div className="flex justify-between border-b border-slate-300">
            <div>
                Received INR
                <div className="text-sm">sat March30 2024</div>
            </div>
            <div>
              + RS 200 
            </div>
        </div>

    </Card>
}