import { NextRequest,NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * @method GET
 * @route ~/api/users/logout
 * @desc Logout User (Sign out)
 * @access public
 */

export async function GET(request:NextRequest){
    try {
      const cookieStore = await  cookies();
      cookieStore.set("jwtToken", "", {
        expires: new Date(0), // تعيين تاريخ انتهاء صلاحية الكوكيز إلى تاريخ الماضي
      });
      return NextResponse.json({message:'logout'}, {status:200});
    } catch (error) {
       return NextResponse.json(
        {message:'internal server error'},
        {status:500}
       ) 
    }
}