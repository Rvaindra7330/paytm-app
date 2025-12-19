import { Button } from "./button"

interface AppbarProps{
    user?:{
        name?:string |null
    },
    OnSignin: any,
    OnSignOut:any
}
export const Appbar=({user,OnSignin,OnSignOut}:AppbarProps)=>{
    return <div className="flex justify-between px-4 border-b border-slate-300 ">
        <div className="flex flex-col justify-center font-bold text-xl ">
          PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user?OnSignOut:OnSignin} >{user?"Log Out":"Login"}</Button>
        </div>
      
    </div>
}