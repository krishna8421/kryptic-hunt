import { hashPassword } from "@/lib/bcrypt";
import { registerSchema } from "@/schemas/auth";
import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return NextResponse.json(
      {
        message: "No data provided",
      },
      {
        status: 400,
      },
    );
  }

  const parseData = registerSchema.safeParse(data);

  if (!parseData.success) {
    return NextResponse.json(
      {
        success: parseData.success,
        message: "Invalid data provided",
      },
      {
        status: 400,
      },
    );
  }

  const { name, personalEmail, kiitEmail, phoneNumber, password } = data;

  const userExists = await db.user.findUnique({
    where: {
      kiitEmail,
    },
  });

  if (userExists) {
    return NextResponse.json(
      {
        success: false,
        message: "User already exists",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const hashedPassword = await hashPassword(password);
    await db.user.create({
      data: {
        name,
        personalEmail,
        kiitEmail,
        phoneNumber,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registered successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log({ register: error });
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
