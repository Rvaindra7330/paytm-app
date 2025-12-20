"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/src/card";
import { Center } from "@repo/ui/src/center";
import { TextInput } from "@repo/ui/src/TextInput";
import { p2pTransfer } from "app/lib/actions/p2pTransfer";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="h-[90vh]">
        <Center>
            <ToastContainer/>
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Number"} label="Number" value={number} onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" value={amount} onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async()=>{
                            try{
                            await p2pTransfer(number, Number(amount) * 100)
                            setNumber("")
                            toast.success("Transfer successful!")
                            }catch(e){
                                toast.error("Transfer successful.Please try again!")
                            }finally{
                            setAmount("")
                            }
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}