"use client";
import Form from "next/form";
import { login } from "./actions";
export default function LoginPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-bold text-gray-900">ログイン</h2>
					<p className="mt-2 text-sm text-gray-600">
						利用しているツールでログインしてください
					</p>
				</div>
				<div className="mt-8">
					<Form action="/login" className="flex flex-col gap-4">
						<button
							type="submit"
							formAction={() => login("slack_oidc")}
							className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#4A154B] hover:bg-[#3c113d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A154B]"
						>
							<div className="i-tabler:brand-slack mx-2" />
							Slackでログイン
						</button>
						<button
							type="submit"
							formAction={() => login("discord")}
							className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7289DA] hover:bg-[#5e6e9e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7289DA]"
						>
							<div className="i-tabler:brand-discord mx-2" />
							Discordでログイン
						</button>
					</Form>
				</div>
			</div>
		</div>
	);
}
