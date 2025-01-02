// src/app/api/users/register/route.ts
import { RegisterUserDto } from '@/utils/dtos'; // استيراد واجهة المستخدم
import { registerSchema } from '@/utils/validationShemas'; // تأكد من أن هذا المسار صحيح

import { NextResponse, NextRequest } from 'next/server'; // استيراد الاستجابات والطلبات من Next.js
import prisma from '@/utils/db'; // استيراد عميل Prisma
import bcrypt from 'bcryptjs'; // استيراد مكتبة bcrypt لتجزئة كلمات المرور
import { setCookie } from '@/utils/generateToken'; // استيراد دالة لإنشاء الكوكيز

/**
 * @method POST
 * @route ~/api/users/register
 * @desc create New User[(Register)(Sign Up)(انشاء حساب)]
 * @access public
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as RegisterUserDto;  
    const validation = registerSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email: body.email } });
    
    if (user) {
      return NextResponse.json(
        { message: 'هذا المستخدم مسجل بالفعل' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword, 
      },
      select: {
        username: true,
        id: true,
        isAdmin: true,
      } 
    });

    const cookie = setCookie({
      id: newUser.id,
      username: newUser.username,
      isAdmin: newUser.isAdmin,
    });

    return NextResponse.json(
      { ...newUser, message: "تم التسجيل والمصادقة" },
      {
        status: 201,
        headers: { "Set-Cookie": cookie }
      }
    );

  } catch (error) {
    console.error(error); // تسجيل الخطأ لمساعدتك في تصحيح الأخطاء
    return NextResponse.json(
      { message: 'خطأ داخلي في الخادم' },
      { status: 500 }
    );  
  }   
}
