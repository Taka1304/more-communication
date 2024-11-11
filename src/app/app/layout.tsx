export default function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="flex">
				<main className="flex-1 p-8">{children}</main>
			</div>
		</div>
	);
}