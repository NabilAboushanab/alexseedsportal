import { z } from 'zod';
import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/utils/db';
import bcrypt from 'bcryptjs';

/**
 * @method POST
 * @route ~/api/users/register
 * @desc Register User (تسجيل مستخدم)
 * @access public
 */

// تعريف RegisterUserDto والمخطط للتحقق من المدخلات
interface RegisterUserDto {
  username: string;
  email: string;
  password: string;
}

const registerSchema = z.object({
  username: z.string().min(2, { message: "اسم المستخدم مطلوب" }),
  email: z.string().min(3, { message: "البريد الإلكتروني مطلوب" }).email(),
  password: z.string().min(6, { message: "كلمة المرور مطلوبة" }),
});

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

    // تحقق من وجود مستخدم بنفس اسم المستخدم أو البريد الإلكتروني
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: body.username },
          { email: body.email },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'اسم المستخدم أو البريد الإلكتروني مستخدم بالفعل' },
        { status: 400 }
      );
    }

    // تجزئة كلمة المرور
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // إنشاء المستخدم في قاعدة البيانات
    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'تم تسجيل المستخدم بنجاح' },
      { status: 201 }
    );

  } catch (error) {
    console.error(error); // تسجيل الخطأ لمساعدتك في تصحيح الأخطاء
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
