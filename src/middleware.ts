import type { NextRequest } from "next/server";
import { updateSession } from "./libs/supabase/middleware";

export async function middleware(req: NextRequest) {
	return await updateSession(req);
}

export const config = {
	matcher: [
		"/app/:path*",
		"/login",
		"/auth/:path*",
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
