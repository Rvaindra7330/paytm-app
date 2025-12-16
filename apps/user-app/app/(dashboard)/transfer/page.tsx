import { AddMoney } from "components/AddmoneyCard";

export default function(){
    
    return <div className="width-screen pl-5">
        <div className="text-xl font-bold text-[#6a51a6] pb-10 pt-3">
            Transfer
        </div>
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
                <AddMoney/>
            </div>
            <div>
                <div></div>
            </div>
        </div>
       <div>
        
       </div>
    </div>
}