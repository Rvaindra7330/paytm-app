import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
import {prisma} from '@repo/db'
interface credentialsType{
    phone :string,
    password:string
}
export const authOptions= {
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                phone:{label:"Phone Number", type:"text", placeholder:"1231231234",required:true },
                password:{label: "Password", type: "password", required: true}
            },
            async authorize(credentials:credentialsType | undefined){
                if (!credentials?.phone || !credentials?.password) return null;
                const hashedPass= await bcrypt.hash(credentials.password,10)
                const existingUser= await prisma.user.findFirst({
                    where:{
                        number:credentials.phone
                    }
                })
                if(existingUser){
                    const passValidation=await  bcrypt.compare(credentials.password,existingUser.password)
                    if(passValidation){
                        return {
                            id:existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        }
                    }
                    return null
                }
                try{
                    const user= await prisma.user.create({
                        data:{
                            number:credentials.phone,
                            password:hashedPass

                        }
                    })
                    return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.number
                }
                } catch(e){
                    console.error(e)
                }
                
                return null;

            }
        })
    ],
    secret: process.env.JWT_SECRET ,
    callbacks:{
        async session({token,session}:any){
            session.user.id=token.sub
            return session
        }
    }
}