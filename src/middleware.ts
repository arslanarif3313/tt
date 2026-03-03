import { NextResponse } from "next/server";
export function middleware(req) {
  const path = req.nextUrl.pathname.toLowerCase();


  // Block spam & fake product URLs
  if (
    path.includes("product") ||
    path.includes("ambush") ||
    path.includes("価格") ||
    path.match(/[一-龯]/) // Japanese characters
  ) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}