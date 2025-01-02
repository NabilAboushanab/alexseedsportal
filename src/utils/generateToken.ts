import Jwt from 'jsonwebtoken';
import { JWTPayload } from './types';
import { serialize } from 'cookie';

// توليد توكن JWT
export function generateJWT(jwtPayload: JWTPayload): string {  // تم تغيير النوع من 'String' إلى 'string'
  const privateKey = process.env.JWT_SECRET as string;
  const token = Jwt.sign(jwtPayload, privateKey, {
    expiresIn: '30d',
  });
  return token;
}

// تعيين الكوكي مع JWT
export function setCookie(jwtPayload: JWTPayload): string {
  const token = generateJWT(jwtPayload);

  const cookie = serialize("jwtToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // development=http, production=https
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 يومًا
  });
  return cookie;
}
