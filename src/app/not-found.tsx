import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-between">
			<div className="z-0">
				<Image
					style={{
						objectFit: "contain",
						objectPosition: "center",
						opacity: 1,
						zIndex: 0,
					}}
					src={"/images/NotFound.png"}
					alt="Not Found"
					fill
				/>
			</div>
			<Link href={"/"}>
				<button
					type="button"
					className="relative z-10 mb-30 px-12 py-4 text-lg font-bold rounded-lg border-none bg-transparent hover:bg-sky-500 hover:text-white text-blue-400"
				>
					Topページに戻る
				</button>
			</Link>
		</div>
	);
};

export default NotFoundPage;
