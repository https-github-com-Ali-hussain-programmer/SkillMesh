import { NextResponse } from "next/server";

export function middleware(request) {
  const cookies = request.cookies;
  const token = cookies.get("token");
  if(!token){
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next()

}

export const config = {
  matcher: [
    "/profile",
    "/Payment",
    "/Payment/ConfirmPay",
    "/Payment/SubmitRequirement",
  ],
};
