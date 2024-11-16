import { HeroImageRight } from "@/components/HeroImage";

export default function Home() {
	return (
		<>
			<HeroImageRight />
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold mb-8">なんか機能とかの説明がくる</h1>
				<div className="grid gap-8">
					<section className="bg-white p-6 rounded-lg shadow">
						<h2 className="text-2xl font-semibold mb-4">組織登録</h2>
					</section>
				</div>
			</div>
		</>
	);
}
