import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentDate = new Date();
  const targetDate = new Date("2023-12-29");
  const diff = targetDate.getTime() - currentDate.getTime();

  if (diff > 0 && process.env.NODE_ENV === "production") {
    return NextResponse.redirect(new URL("/q", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/q/(.*)",
};
