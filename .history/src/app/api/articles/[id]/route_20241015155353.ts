import {NextRequest ,NextResponse} from 'next/server'
import {UpdateArticleDto} from '@/utils/dtos';
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { articles } from '@/utils/data';
import { comment } from 'postcss';
import { number } from 'zod';

interface props {
    params: { id :string}
}

/**
 * @method GET
 * @route ~/api/articles/:id
 * @desc Get single Article By id
 * @access public
 */

export async function GET(request:NextRequest,{params} :props){
try {
    const Article =await prisma.article.findUnique({
        where:{id: parseInt(params.id)},
      include:{
        Comment:{
            include:{
                User:{
                    select:{
                        username:true
                    }
                }
            },
            orderBy:{
                createdAt: 'desc'
            }
        }
      }  
    })
    if(!Article) { 
     return NextResponse.json({message: 'Article not found'},{status:404 });
    }
    return NextResponse.json(Article,{status :200}); 
} catch (error) {
    return NextResponse.json(
        {message:"internal server error"},
        {status:500}
    );   
}
}

/**
 * @method PUT
 * @route ~/api/articles/:id
 * @desc Update Article
 * @access private(only admin can update article)
 */

export async function PUT(request:NextRequest,{params} :props){
try {
    const user=verifyToken(request);
    if(user===null || user.isAdmin===false){
        return NextResponse.json(
            {message:"only admin,access denied "},
            {status:403}
        )
    }
    const Article =await prisma.article.findUnique({where:{id: parseInt(params.id)}})
    if(!Article) { 
     return NextResponse.json({message: 'Article not found'},{status:404 });
    }


    const body=(await request.json()) as UpdateArticleDto;
   const updatedArticle= await prisma.article.update({
   where:{id:parseInt(params.id)},
   data:{
    title:body.title,
    description:body.description
}
})

    return NextResponse.json(updatedArticle,{status :200});
} catch (error) {
    return NextResponse.json(
        {message:"internal server error"},
        {status:500}
    );   
    
}
}

/**
 * @method DELETE
 * @route ~/api/articles/:id
 * @desc Delete Article
 * @access private (only admin can delete article)
 */

export async function DELETE(request:NextRequest,{params} :props){
try {
    const user=verifyToken(request);
    if(user===null || user.isAdmin===false){
        return NextResponse.json(
            {message:"only admin,access denied "},
            {status:403}
        )
    }
    const Article =await prisma.article.findUnique({
        where:{id: parseInt(params.id)},
       include:{Comment:true} //prismaهات كل التعليقات التى تنتمى لهذة ال
    });
    if(!Article) { 
     return NextResponse.json({message: 'Article not found'},{status:404 });
    }

    //deleting the article
    await prisma.article.delete({where:{id:parseInt(params.id)}});

    //deleting the comments that belong to this article( مسح كل التعليقات المرتبطة بية)
  const commentsIds: number[] =Article?.Commentomments.map(comment =>comment.id);
    await prisma.comment.deleteMany({
        where:{id:{in:commentsIds}}
    });
    return NextResponse.json({message:'article deleted'},{status :200});
} catch (error) {
    //console.log(error) for print error;


    return NextResponse.json(
        {message:"internal server error"},
        {status:500}
    );  
}
}