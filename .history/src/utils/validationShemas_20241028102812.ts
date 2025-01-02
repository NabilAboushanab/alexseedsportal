// src/utils/validationShemas.ts
import { z } from 'zod';

// تعريف المخطط للتحقق من المدخلات عند التسجيل
export const registerSchema = z.object({
  username: z.string().min(2, { message: "اسم المستخدم مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  password: z.string().min(6, { message: "كلمة المرور مطلوبة" }),
});
