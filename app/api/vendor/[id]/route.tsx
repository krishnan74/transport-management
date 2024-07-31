import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: {
    params: {
      id: string;
    };
  }
) {
  try {
    const id = context.params.id;
    const vendor = await prisma.vendor.findFirst({
      where: {
        id: id,
      },
      include: {
        address: true,
        trips: true,
      },
    });

    return NextResponse.json(
      {
        message: "success",
        data: vendor,
      },
      { status: 200 }
    );
  } catch (e: any) {
    console.log("Error while fetching vendors :: ", e);
    return NextResponse.json(
      { message: "Failed", error: e.message },
      { status: 500 }
    );
  }
}