import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/utils/db';
import { RegisterUserDto } from '@/utils/dtos';
import { registerSchema } from '@/utils/validationShemas';
import { setCookie } from '@/utils/generateToken';

/**
 * @method POST
 * @route ~/api/users/register
 * @desc Create New User (Register / Sign Up / إنشاء حساب)
 * @access public
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as RegisterUserDto;

        // Validate input
        const validation = registerSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({
                message: validation.error.errors[0].message
            }, {
                status: 400
            });
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: body.email }
        });
        if (existingUser) {
            return NextResponse.json({
                message: 'This email is already registered'
            }, {
                status: 400
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        // Create new user
        const newUser = await prisma.user.create({
            data: {
                username: body.username,
                email: body.email,
                password: hashedPassword
            },
            select: {
                username: true,
                id: true,
                isAdmin: true
            }
        });

        // Generate JWT token and set cookie
        const cookie = setCookie({
            id: newUser.id,
            username: newUser.username,
            isAdmin: newUser.isAdmin
        });

        // Return success response
        return NextResponse.json({
            ...newUser,
            message: 'Registered & Authenticated'
        }, {
            status: 201,
            headers: { "set-cookie": cookie }
        });

    } catch (error) {
        console.error('Error in registration:', error);
        return NextResponse.json({
            message: 'Internal server error'
        }, {
            status: 500
        });
    }
}
