export const Select=({options,onSelect}:{
    options:{
        key:string,
        value:string
    }[],
    onSelect:(value:string)=>void
})=>{
    return <select onChange={(e)=>onSelect(e.target.value)}
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5 outline-none">
        {options.map(option=><option value={option.key}>{option.value}</option>)}
     </select>

}