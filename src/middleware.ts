import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  // const options = {
  //   timeZone: "Asia/Kolkata",
  //   hour12: false,
  // };

  // const currentDate = new Date();
  // const istTimeCurrent = currentDate.toLocaleString("en-US", options);
  
  // const targetDate = new Date("2023-12-29T12:00:00.000Z").toLocaleString(
  //   "en-US",
  //   options,
  // );
  
  // const diff = Date.parse(targetDate) - Date.parse(istTimeCurrent);



  // if (diff > 0 && process.env.NODE_ENV === "production") {
  //   return NextResponse.redirect(new URL("/q", _request.url));
  // }
  return NextResponse.next();
}

// export const config = {
//   matcher: "/q/(.*)",
// };
