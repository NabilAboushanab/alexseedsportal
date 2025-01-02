import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import { verifyToken } from "@/utils/verifyToken";
import { createArticleSchema } from '@/utils/validationShemas';
import { CreateArticleDto } from '@/utils/dtos';
import { Article } from '@prisma/client';

/**
 * @method GET
 * @route ~/api/articles
 * @desc Get Articles By Page Number
 * @access public
 */
export async function GET(request: NextRequest, context?: { params: { id: string } }) {
  try {
    // إذا تم تمرير ID (للأغراض الفردية)
    if (context?.params?.id) {
      const { id } = context.params;
      const article = await prisma.article.findUnique({
        where: { id },
      });

      if (!article) {
        return NextResponse.json({ message: "Article not found" }, { status: 404 });
      }

      return NextResponse.json(article, { status: 200 });
    }

    // التعامل مع طلبات الصفحة
    const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1";

    const articles = await prisma.article.findMany({
      skip: ARTICLE_PER_PAGE * (parseInt(pageNumber) - 1),
      take: ARTICLE_PER_PAGE,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(articles, { status: 200 });

  } catch (error) {
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
    const user = verifyToken(request);
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { message: "Only admin, access denied" },
        { status: 403 }
      );
    }

    const body = (await request.json()) as CreateArticleDto;
    const validation = createArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
    }

    const newArticle: Article = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newArticle, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
