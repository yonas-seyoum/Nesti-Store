import { NextRequest, NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return NextResponse.json({
    message: `Get Product with ID ${id}`,
  });
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return NextResponse.json({
    message: `Create Product with ID ${id}`,
  });
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return NextResponse.json({
    message: `Update Product with ID ${id}`,
  });
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return NextResponse.json({
    message: `Delete Product with ID ${id}`,
  });
}
