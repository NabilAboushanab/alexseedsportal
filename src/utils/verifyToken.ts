import  Jwt  from "jsonwebtoken";
import { NextRequest } from "next/server";
import { JwtPayload } from "jsonwebtoken";
import { JWTPayload } from "@/utils/types";

//verify Toke For API End Point
export function verifyToken(request:NextRequest):JWTPayload | null{
    try {
     const jwtToken = request.cookies.get("jwtToken"); 
     const token =jwtToken?.value as string;
     if (!token) return null;
     const privateKey=process.env.JWT_SECRET as string;
     const userPayload=Jwt.verify(token,privateKey) as JWTPayload;
     return userPayload;

    } catch (error) {
      return null;  
    }
}

//verify Toke For Page
export function verifyTokenForPage(token:string):JWTPayload | null{
  try {
   const privateKey=process.env.JWT_SECRET as string;
   const userPayload=Jwt.verify(token,privateKey) as JWTPayload;
if(!userPayload) return null;

   return userPayload;
  } catch (error) {
    return null;  
  }
}