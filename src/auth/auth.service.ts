import { Injectable } from "@nestjs/common";
import  * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";


@Injectable() 
export class AuthService{
   constructor(private prisma: PrismaService){}


   signup(dto:AuthDto){
      // generation  : 
      const pwHashed = argon.hash
      // save

      //return USER
      return " coucou "

   }








   login(){
      return " coucou "
   }
   
      
    
    
   
}
