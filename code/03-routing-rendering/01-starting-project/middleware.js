const { NextResponse } = require("next/server");

export function middleware(request) {
  console.log(NextResponse.next());
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
