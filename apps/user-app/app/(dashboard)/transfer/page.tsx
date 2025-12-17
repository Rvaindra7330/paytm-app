import { AddMoney } from "components/AddmoneyCard";
import { Balance } from "components/BalanceCard";
import { OnRampTransactions } from "components/OnRampTransactions";

export default function(){
    const transactions=[
        {
            time:new Date(2025, 2, 10, 9, 15, 32),
            amount:20000,
            status:"pending",
            provider:"HDFC"
        },
        {
            time:new Date(2025, 2, 10, 9, 15, 32),
            amount:20000,
            status:"pending",
            provider:"HDFC"
        },
        {
            time:new Date(2025, 2, 10, 9, 15, 32),
            amount:20000,
            status:"pending",
            provider:"HDFC"
        },
        {
            time:new Date(2025, 2, 10, 9, 15, 32),
            amount:20000,
            status:"pending",
            provider:"HDFC"
        },
    ]
    
    return <div className="width-screen pl-5 ">
        <div className="text-xl font-bold text-[#6a51a6] pb-10 pt-3">
            Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 ">
            <div >
                <AddMoney/>
            </div>
            <div>
                <Balance amount={200} locked={300}/>
                <div className="pt-4"><OnRampTransactions transactions={transactions}/></div>
            </div>
        </div>
       <div>
        
       </div>
    </div>
}