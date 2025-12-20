import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
import {prisma} from '@repo/db'
import { z } from "zod";

interface credentialsType{
    phone :string,
    password:string
}
const credentialsSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});
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
                const parsed = credentialsSchema.safeParse({
                phone: credentials.phone,
                password: credentials.password,
            });
            if (!parsed.success) {
                return null;
             }    
                const { phone, password } = parsed.data;
                
                const existingUser= await prisma.user.findFirst({
                    where:{
                        number:phone
                    }
                })
                if(existingUser){
                    const passValidation=await  bcrypt.compare(password,existingUser.password)
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
                    const hashedPass= await bcrypt.hash(password,10)
                    const user= await prisma.user.create({
                        data:{
                            number:phone,
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