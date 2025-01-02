import { NextRequest, NextResponse } from "next/server";
import { createArticleSchema } from '@/utils/validationShemas';
import { CreateArticleDto } from '@/utils/dtos';
import { Article } from '@prisma/client';
import prisma from "@/utils/db";
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import { verifyToken } from "@/utils/verifyToken";

/**
 * @method GET
 * @route ~/api/articles
 * @desc Get Articles By Page Number
 * @access public
 */
export async function GET(request: NextRequest) {
    try {
        const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1"; 
       
        // جلب المقالات مع التصفية
        const articles = await prisma.article.findMany({
            skip: ARTICLE_PER_PAGE * (parseInt(pageNumber) - 1),
            take: ARTICLE_PER_PAGE,
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json(articles, { status: 200 }); 
    } catch (error) {
        console.error("Error fetching articles:", error); // تسجيل الخطأ
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );    
    }
}

/**
 * @method POST
 * @route ~/api/articles
 * @desc Create New Article
 * @access private (only admin can create article)
 */
export async function POST(request: NextRequest) {
    try {
        // التحقق من صلاحية المستخدم
        const user = verifyToken(request);
        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: "Only admin, access denied." },
                { status: 403 }
            );
        }

        // جلب البيانات من الطلب والتحقق من صحتها
        const body = (await request.json()) as CreateArticleDto; 
        const validation = createArticleSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            );
        }
        
        // إنشاء المقال الجديد
        const newArticle: Article = await prisma.article.create({
            data: {
                title: body.title,
                description: body.description    
            }
        });
        
        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        console.error("Error creating article:", error); // تسجيل الخطأ
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );   
    }
}
