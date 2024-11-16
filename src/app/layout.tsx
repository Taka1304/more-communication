import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "More Communication!",
	description: "More Communication",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="m-0 min-h-screen max-w-screen overflow-x-hidden bg-gray-50">
				<Header />
				<main className="">{children}</main>
			</body>
		</html>
	);
}
