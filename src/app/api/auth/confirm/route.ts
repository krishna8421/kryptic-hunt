import { db } from "@/server/db";
import jwt from "jsonwebtoken";
import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect("/auth/login");
  }

  let decoded: any;
  try {
    decoded = jwt.verify(code, env.NEXTAUTH_SECRET);
  } catch (err) {
    return NextResponse.redirect("/auth/login");
  }

  const email = decoded.email;

  if (!email) {
    return NextResponse.redirect("/auth/login");
  }

  await db.user.update({
    where: {
      kiitEmail: email,
    },
    data: {
      isVerified: true,
    },
  });

  return NextResponse.redirect("/verified");
}
