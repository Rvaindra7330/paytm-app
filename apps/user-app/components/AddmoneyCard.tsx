"use client"
import { Card } from "@repo/ui/src/card"
import { Select } from "@repo/ui/src/Select";
import { TextInput } from "@repo/ui/src/TextInput"
import { useState } from "react";

export const AddMoney=()=>{
    const SUPPORTED_BANKS=[{
        name:"HDFC Bank",
        redirectURL:"https://netbanking.hdfcbank.com/netbanking/"
    },{
        name:"Axis Bank",
        redirectURL:"https://www.axisbank.com/"
    }
]
    const [amount, setAmount] = useState(0);
    const [redirectURL,setRedirectURL]=useState(SUPPORTED_BANKS[0]?.redirectURL)
    const [provider,setProvider]= useState(SUPPORTED_BANKS[0]?.name)
    return <Card title="Add money">
        <div className="w-full pt-4">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => {
            setAmount(Number(value))
        }} />
          <div className="py-4 text-left">
            Bank
        </div>
        <Select onSelect={(value)=>{
            setRedirectURL(SUPPORTED_BANKS.find(x=>x.name===value)?.redirectURL || "")
            setProvider(SUPPORTED_BANKS.find(x=>x.name===value)?.name || "")
        }} options={SUPPORTED_BANKS.map(x=>({
                key:x.name,
                value:x.name
            }))}/>
        </div>
       
    </Card>
}