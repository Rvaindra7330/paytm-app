"use client"
import { Card } from "@repo/ui/src/card"
import { TextInput } from "@repo/ui/src/TextInput"
import { useState } from "react";

export const AddMoney=()=>{
    const [amount, setAmount] = useState(0);
    return <Card title="Add money">
       <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => {
            setAmount(Number(value))
        }} />
    </Card>
}