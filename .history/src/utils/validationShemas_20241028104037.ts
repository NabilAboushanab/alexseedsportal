import { text } from 'stream/consumers';
import { z } from 'zod';

// create Article Schema
export const createArticleSchema = z.object({
    title: z.string({
        required_error: "title is required",  
        invalid_type_error: "title should be of type string" 
    }).min(2, { message: "title should be less than 2 long" })
      .max(200, { message: "title should be less than 200 characters" }),
    description: z.string().min(10),
});

// register Schema
export const registerSchema = z.object({
    username: z.string().min(2).max(100),
    email: z.string().min(3).max(200).email(),
    password: z.string().min(6),
});

// login Schema (modified to use 'username' instead of 'email')
export const loginSchema = z.object({
    username: z.string().min(2).max(100), // تعديل الحقل ليكون username بدلاً من email
    password: z.string().min(6),
});

// Create Comment Schema
export const createCommentSchema = z.object({
    text: z.string().min(2).max(500),
    articleId: z.number(),
});

// update user profile schema
export const updateUserSchema = z.object({
    username: z.string().min(2).max(100).optional(),
    email: z.string().min(3).max(200).email().optional(),
    password: z.string().min(6).optional(),
});
