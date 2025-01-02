import { NextResponse,NextRequest } from "next/server";

export function middleware(request:NextRequest){
  
    const jwtToken= request.cookies.get("jwtToken");
    const token=jwtToken?.value as string;

    if(!token){
        return NextResponse.json(
            {message:'no token provided, access denied, message from middleware'},
            { status: 401 } // unauthorized
        );
    }
}

export const config={
    matcher: ["/api/users/profile/:path*"]
}