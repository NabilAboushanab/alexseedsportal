import { z } from 'zod';
import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/utils/db'; // تأكد من أن المسار صحيح
import bcrypt from 'bcryptjs';
import { setCookie } from '@/utils/generateToken';

/**
 * @method POST
 * @route ~/api/users/login
 * @desc Login User((Log In (Sign In)(Authentication)(تسجيل الدخول)))
 * @access public
 */

// تعريف LoginUserDto والمخطط للتحقق من المدخلات
interface LoginUserDto {
  username: string;
  password: string;
}

const loginSchema = z.object({
  username: z.string().min(2, { message: "اسم المستخدم مطلوب" }),
  password: z.string().min(6, { message: "كلمة المرور مطلوبة" }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as LoginUserDto;
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    // البحث عن المستخدم باستخدام اسم المستخدم
    const user = await prisma.user.findUnique({ where: { username: body.username } });
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 400 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(body.password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 400 }
      );
    }

    const cookie = setCookie({
      id: user.id,
      isAdmin: user.isAdmin,
      username: user.username,
    });

    return NextResponse.json(
      { message: 'Authenticated' },
      {
        status: 200,
        headers: { "Set-Cookie": cookie }
      }
    );

  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
