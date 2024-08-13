import { auth } from "./lib/auth";

export default auth;

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg)).*)",
  ],
};
