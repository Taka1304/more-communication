"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabase/server";

type SupportedProvider = "slack_oidc" | "discord";

export async function login(provider: SupportedProvider) {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider,
		options: {
			redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/app/dashboard`,
		},
	});

	if (error) {
		redirect("/error");
	}
	if (data.url) {
		redirect(data.url);
	}

	revalidatePath("/app", "layout");
	redirect("/app");
}
