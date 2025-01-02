// src/app/api/add-directions/route.ts
import { NextResponse } from 'next/server';
import prisma from "@/utils/db";

export async function POST(request: Request) {
  const { Directions } = await request.json();

  if (!Directions) {
    return NextResponse.json({ message: 'Directions are required' }, { status: 400 });
  }

  // Create in Database
  await prisma.tblDirectionsAdd.create({
    data: {
      Directions,
    },
  });

  return NextResponse.json({ message: 'Directions added successfully' });
}
