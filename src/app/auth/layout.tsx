export default function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* サイドナビゲーションなどのアプリケーション共通レイアウト */}
			<div className="flex">
				<nav className="w-64 min-h-screen bg-white shadow">
					{/* サイドナビゲーション内容 */}
				</nav>
				<main className="flex-1 p-8">{children}</main>
			</div>
		</div>
	);
}
