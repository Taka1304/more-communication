"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [drawerOpened, setDrawerOpened] = useState(false);

	return (
		<div className="w-full">
			<header className="h-15 px-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
				<div className="max-w-7xl mx-auto flex justify-between items-center h-full">
					<div className="text-2xl font-bold">Logo</div>

					<nav className="hidden sm:flex h-full gap-1">
						<Link
							href="/"
							className="flex items-center h-full px-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							Home
						</Link>
						<div className="relative">
							<button
								type="button"
								className="flex items-center h-full  border-none bg-transparent px-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							>
								<span className="mr-1 underline">Features</span>
								<div className="i-tabler:chevron-down w-4 h-4 text-blue-600" />
							</button>
						</div>
						<Link
							href="/learn"
							className="flex items-center h-full px-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							Learn
						</Link>
						<Link
							href="/contact"
							className="flex items-center h-full px-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							Contact
						</Link>
					</nav>

					<div className="hidden sm:flex gap-2">
						<Link href={"/login"}>
							<button
								type="button"
								className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
							>
								Log in
							</button>
						</Link>
						<Link href={"/create-workspace"}>
							<button
								type="button"
								className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
							>
								New <div className="i-tabler:plus" />
							</button>
						</Link>
					</div>

					<button
						type="button"
						onClick={() => setDrawerOpened(true)}
						className="sm:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
					>
						<div className="i-tabler:menu-2" />
					</button>
				</div>
			</header>

			{drawerOpened && (
				<div className="fixed inset-0 z-50 sm:hidden">
					<button
						type="button"
						className="absolute inset-0 bg-black bg-opacity-50 border-none"
						onClick={() => setDrawerOpened(false)}
					/>
					<div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-lg">
						<div className="p-4 border-b border-gray-200 dark:border-gray-800">
							<div className="flex justify-between items-center">
								<span className="text-lg font-medium">Navigation</span>
								<button
									type="button"
									onClick={() => setDrawerOpened(false)}
									className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
								>
									<div className="i-tabler:menu-2" />
								</button>
							</div>
						</div>

						<div className="p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
							<Link
								href={"/"}
								className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200"
							>
								Home
							</Link>
							<Link href="/features">
								<button
									type="button"
									className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-700 dark:text-gray-200"
								>
									<span>Features</span>
									<div
										className={
											"i-tabler:chevron-down w-4 h-4 text-blue-600 transition-transform"
										}
									/>
								</button>
							</Link>
							<Link
								href={"/"}
								className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200"
							>
								Learn
							</Link>
							<Link
								href={"/"}
								className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200"
							>
								Academy
							</Link>

							<div className="mt-6 grid grid-cols-2 gap-2">
								<Link href={"/login"}>
									<button
										type="button"
										className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
									>
										Log in
									</button>
								</Link>
								<Link href="/create-workspace">
									<button
										type="button"
										className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
									>
										New <div className="i-tabler:plus" />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Header;
