import type { NextRequest } from "next/server";
import { updateSession } from "./libs/supabase/middleware";

export async function middleware(req: NextRequest) {
	return await updateSession(req);
}

export const config = {
	matcher: [
		// appパス配下のみを保護
		"/app/:path*",
		"/auth/callback",
	],
};
