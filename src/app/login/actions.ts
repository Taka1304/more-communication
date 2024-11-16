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
			redirectTo: "/auth/callback",
		},
	});

	if (error) {
		redirect("/error");
	}
	if (data.url) {
		redirect(data.url);
	}

	revalidatePath("/app", "layout");
	redirect("/app/dashboard");
}
