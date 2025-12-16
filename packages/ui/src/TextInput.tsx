"use client"
export function TextInput({
    placeholder,
    label,
    onChange
}:{ placeholder:string,label:string,onChange:(value:string)=>void}){
    return <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">{label}</label>
            <input type="text" onChange={(e)=>onChange(e.target.value)} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder={placeholder}required />
        </div>
}