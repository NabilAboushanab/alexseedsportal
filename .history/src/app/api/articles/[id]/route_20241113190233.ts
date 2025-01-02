import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import { verifyToken } from "@/utils/verifyToken";
import { createArticleSchema } from "@/utils/validationShemas";
import { CreateArticleDto, UpdateArticleDto } from "@/utils/dtos";
import { Article } from "@prisma/client";

interface RouteParams {
  params: { id?: string };
}

/**
 * @method GET
 * @route ~/api/articles
 * @desc Get Articles By Page Number or Single Article By ID
 * @access public
 */
export async function GET(request: NextRequest, context: RouteParams) {
  const { params } = context;
  try {
    if (params?.id) {
      const article = await prisma.article.findUnique({
        where: { id: parseInt(params.id) },
        include: {
          comments: {
            include: {
              user: { select: { username: true } },
            },
            orderBy: { createdAt: "desc" },
          },
        },
      });

      if (!article) {
        return NextResponse.json({ message: "Article not found" }, { status: 404 });
      }

      return NextResponse.json(article, { status: 200 });
    }

    const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1";

    const articles = await prisma.article.findMany({
      skip: ARTICLE_PER_PAGE * (parseInt(pageNumber) - 1),
      take: ARTICLE_PER_PAGE,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
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
    if (!user || !user.isAdmin) {
      return NextResponse.json({ message: "Only admin, access denied" }, { status: 403 });
    }

    const body = (await request.json()) as CreateArticleDto;
    const validation = createArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
    }

    const newArticle: Article = await prisma.article.create({
      data: { title: body.title, description: body.description },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

/**
 * @method PUT
 * @route ~/api/articles/:id
 * @desc Update Article
 * @access private (only admin can update article)
 */
export async function PUT(request: NextRequest, context: RouteParams) {
  const { params } = context;
  try {
    const user = verifyToken(request);
    if (!user || !user.isAdmin) {
      return NextResponse.json({ message: "Only admin, access denied" }, { status: 403 });
    }

    const article = await prisma.article.findUnique({ where: { id: parseInt(params.id!) } });
    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    const body = (await request.json()) as UpdateArticleDto;
    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(params.id!) },
      data: { title: body.title, description: body.description },
    });

    return NextResponse.json(updatedArticle, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

/**
 * @method DELETE
 * @route ~/api/articles/:id
 * @desc Delete Article
 * @access private (only admin can delete article)
 */
export async function DELETE(request: NextRequest, context: RouteParams) {
  const { params } = context;
  try {
    const user = verifyToken(request);
    if (!user || !user.isAdmin) {
      return NextResponse.json({ message: "Only admin, access denied" }, { status: 403 });
    }

    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id!) },
      include: { comments: true },
    });

    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    await prisma.article.delete({ where: { id: parseInt(params.id!) } });

    const commentsIds = article.comments.map((comment) => comment.id);
    await prisma.comment.deleteMany({ where: { id: { in: commentsIds } } });

    return NextResponse.json({ message: "Article deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
