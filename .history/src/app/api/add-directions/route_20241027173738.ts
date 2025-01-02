// src/app/api/add-directions/route.ts
import prisma from "@/utils/db"; // تأكد من أن prisma متاح هنا
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { directions } = await request.json(); // الحصول على البيانات من الطلب

  if (!directions) {
    return NextResponse.json({ error: "Directions are required." }, { status: 400 });
  }

  try {
    // إنشاء التعليمات في قاعدة البيانات
    const newDirection = await prisma.tblDirectionsAdd.create({
      data: {
        Directions: directions,
      },
    });

    return NextResponse.json(newDirection, { status: 201 }); // رد بالنجاح
  } catch (error) {
    console.error("Error creating directions:", error);
    return NextResponse.json({ error: "Error adding directions." }, { status: 500 });
  }
}
