import Link from "next/link";

export function HeroImageRight() {
	return (
		<div
			className="bg-[#11284b] bg-cover bg-center py-24 min-h-screen"
			style={{
				backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%),
        url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1080&q=80)`,
			}}
		>
			<div className="container mx-auto px-6">
				<div className="flex justify-between md:(flex-row) sm:(flex-col)">
					<div className="pt-16 pb-16 mr-36 md:(mr-0) max-w-2xl">
						<h1 className="text-white font-bold leading-tight text-5xl md:(text-4xl leading-normal) font-sans">
							Unleash{" "}
							<span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent inline">
								Team Dynamics
							</span>{" "}
							through Communication Analytics
						</h1>

						<p className="text-white/75 text-xl mt-8 leading-relaxed">
							チームの会話を可視化し、コミュニケーションを最適化。
							複数のツールからの会話データを統合・分析し、
							チームの活性化をサポートする次世代のコラボレーションツール
						</p>

						<Link href={"/create-workspace"}>
							<button
								type="button"
								className="mt-10 px-12 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-white hover:opacity-90 transition-opacity"
							>
								無料で始める
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
