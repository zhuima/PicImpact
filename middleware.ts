/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-05 09:05:59
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-05 12:39:47
 * @FilePath: /PicImpact/middleware.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { auth } from "~/server/auth";
import { NextResponse } from "next/server";

// /api/1v / get - tags;

export default auth((req) => {
  // 直接通过 /api/v1/get-tags 请求，不进行认证
  if (req.nextUrl.pathname === "/api/v1/get-tags") {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/api/v1") && !req.auth) {
    return Response.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    );
  }
  if (req.nextUrl.pathname.startsWith("/admin") && !req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (req.auth && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/admin/:path*",
    "/api/v1/:path*",
  ],
};
