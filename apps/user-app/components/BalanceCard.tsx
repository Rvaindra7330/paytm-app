import { Card } from "@repo/ui/src/card"

export const Balance=({amount,locked}:{amount:number,locked:number})=>{
    return <Card title={"Balance"}>
        <div className="flex justify-between border-b border-slate-300 pt-1">
            <div>
                Unlocked balance
            </div>
            <div>
              {amount/100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 pt-1">
            <div>
                Total locked balance
            </div>
            <div>
             {locked/100}INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 pt-1">
            <div>
                Total balance
            </div>
            <div>
              {(amount+locked/100)}INR
            </div>
        </div>
    </Card>
}