import { NextResponse } from 'next/server';
import prisma from '@/utils/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { CtrNumM, DDate, CustNameEn, CustCode, CtrType, CurrShNameEn, Premium } = body;

    if (!CtrNumM || !DDate || !CustNameEn || !CustCode || !CtrType || !CurrShNameEn || !Premium) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await prisma.tblMSContractMain.create({
      data: {
        CtrNumM,
        DDate,
        CustNameEn,
        CustCode: parseInt(CustCode, 10),
        CtrType,
        CurrShNameEn,
        Premium: parseFloat(Premium),
      },
    });

    return NextResponse.json({ message: 'Contract created successfully' });
  } catch (error) {
    console.error('Error creating contract:', error);
    return NextResponse.json({ error: 'Error creating contract' }, { status: 500 });
  }
}
