"use client";

import { useMemo, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Header from "@/components/dashboard/header";
import { useAuth } from "@/components/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

type RepoItem = {
	name: string;
	visibility: "Private" | "Public";
	stars: number;
	updated: string;
	iconType: "image" | "folder";
	iconSrc?: string;
};

const repoItems: RepoItem[] = [
	{
		name: "secure-code-ai/backend-api",
		visibility: "Private",
		stars: 12,
		updated: "Updated 2h ago",
		iconType: "image",
		iconSrc:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuAFOJwWSLL3JD6vjG2VMF_U3s5-aKZ1nqfNpXDooFZvMd456_cAsYzwGujglvf9_OoHmcd87L31yzSrXRGvgi7yirBNvVKW6YcDZV7mXFew9KqbWu5mfOIqe3RqZ8Q_AArB-DhFMM3XJ2hQVH_0Gf8J0o176MX_hw5p_bQ0kerxS9XkT4M2AQe2Nn0NrghP95KyHtVT67St1r3EFgiWxSNibjF8QETWqta-lnYIY2M071XkPp9Hjp8AzmgOZCyBJmQpYzGRp_oHp8I",
	},
	{
		name: "secure-code-ai/frontend-dashboard",
		visibility: "Public",
		stars: 45,
		updated: "Updated 5m ago",
		iconType: "image",
		iconSrc:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCGAH5V4oikYayrhtE4X0bRB0eGhBB_pjgvylaPZ5CFFFNzzTuj2LibueaVdBhEDirLixWV5euqKpdPqG42Oy9v9Zk5NQg3zmeV004luE23RP13Gdf9hRvuWxLOJ8eaJhJAe-23tWRjz_0vXGBWFbXPZGDt9qMytObgY3LPVKRkOdD3PtkrnLExnTRtRcfQg5i1gTn400qOB86qttGBszXcp48kBv88EZYiivwzn_YaClh2K0A2FmDUMlwcF0RK7_Hq3qOkFviHNrY",
	},
	{
		name: "secure-code-ai/docs",
		visibility: "Public",
		stars: 3,
		updated: "Updated 1d ago",
		iconType: "folder",
	},
	{
		name: "secure-code-ai/data-pipeline",
		visibility: "Private",
		stars: 0,
		updated: "Updated 3d ago",
		iconType: "image",
		iconSrc:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCcSbP5QaslGMzukLqESrIqUu6NoJuE4U6wzPTjdLE2zCcHkIMaeQqSc3aVnCtI_J8r_979VM3b8Gt6DtbLB6l1QQucWfvfcUB0AyPEVWSEcfvrbeS1QerYXiTeMOC4kG098id4FRCJ7pQYUOoI6LidQA-uJw0q1fUzxFRG50g0ngYuBRVKL7FctzZibDWua_WphQpnZiegmJCffs26GjxRVxjuXS7H4FddIWhO4DQQXpJ1fe3oPWLBfubmLBJR7-yN8qHcYedV4wk",
	},
];

export function SelectRepo() {
	const router = useRouter();
	const { user } = useAuth();
	const [query, setQuery] = useState("");
	const [selectedRepos, setSelectedRepos] = useState<Set<string>>(
		() => new Set(["secure-code-ai/backend-api", "secure-code-ai/frontend-dashboard"]),
	);

	const filteredRepos = useMemo(() => {
		const normalized = query.trim().toLowerCase();
		if (!normalized) {
			return repoItems;
		}
		return repoItems.filter((repo) =>
			repo.name.toLowerCase().includes(normalized),
		);
	}, [query]);

	const toggleRepo = (name: string) => {
		setSelectedRepos((prev) => {
			const next = new Set(prev);
			if (next.has(name)) {
				next.delete(name);
			} else {
				next.add(name);
			}
			return next;
		});
	};

	return (
		<div
			className={`${inter.className} bg-[#0a0a0f] min-h-screen flex flex-col overflow-x-hidden text-slate-100 selection:bg-[#7c3bed]/30`}
		>
			<Header avatarUrl={user?.avatar_url} />

			<main className="flex-1 w-full pt-24 pb-12 px-4">
				<div className="mx-auto w-full max-w-5xl">
					<div className="mb-12">
						<div className="flex items-center justify-between relative">
							<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-10" />

							<div className="flex flex-col items-center gap-2 bg-[#0a0a0f] px-2">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
									<span className="material-symbols-outlined text-sm font-bold">check</span>
								</div>
								<span className="text-xs font-medium text-emerald-400 hidden sm:block">
									Connect Provider
								</span>
							</div>

							<div className="flex flex-col items-center gap-2 bg-[#0a0a0f] px-2">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#7c3bed] text-white shadow-lg shadow-[#7c3bed]/30 ring-4 ring-[#7c3bed]/20">
									<span className="text-sm font-bold">2</span>
								</div>
								<span className="text-xs font-bold text-[#7c3bed] hidden sm:block">
									Select Repositories
								</span>
							</div>

							<div className="flex flex-col items-center gap-2 bg-[#0a0a0f] px-2">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-500">
									<span className="text-sm font-bold">3</span>
								</div>
								<span className="text-xs font-medium text-slate-500 hidden sm:block">
									Run Analysis
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<h1 className="text-3xl font-bold tracking-tight text-white">
								Add Your First Repository
							</h1>
							<p className="text-slate-400">
								Select the repositories you want SecureCode AI to scan for vulnerabilities.
							</p>
						</div>

						<div className="bg-[#131118] rounded-xl border border-[#2e2839] overflow-hidden shadow-sm">
							<div className="p-4 border-b border-[#2e2839] bg-[#1b1821]">
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
										<span className="material-symbols-outlined text-[20px]">search</span>
									</div>
									<input
										className="block w-full pl-10 pr-3 py-2.5 border border-[#2e2839] rounded-lg leading-5 bg-[#0f0d13] text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#7c3bed] focus:border-[#7c3bed] sm:text-sm"
										placeholder="Search your repositories..."
										value={query}
										onChange={(event) => setQuery(event.target.value)}
										type="text"
									/>
								</div>
							</div>

							<div className="divide-y divide-[#2e2839] max-h-[400px] overflow-y-auto">
								{filteredRepos.map((repo) => {
									const isSelected = selectedRepos.has(repo.name);
									return (
										<button
											type="button"
											key={repo.name}
											onClick={() => toggleRepo(repo.name)}
											className="flex w-full items-center justify-between p-4 hover:bg-[#2a2433] transition-colors text-left"
										>
											<div className="flex items-center gap-4">
												<div className="w-10 h-10 rounded-lg bg-[#1c1922] flex items-center justify-center shrink-0 border border-[#2e2839]">
													{repo.iconType === "image" && repo.iconSrc ? (
														<img
															alt="Repository logo"
															className="w-6 h-6"
															src={repo.iconSrc}
														/>
													) : (
														<span className="material-symbols-outlined text-slate-500">
															folder_open
														</span>
													)}
												</div>
												<div className="flex flex-col">
													<h3 className="text-sm font-semibold text-slate-100 group-hover:text-[#7c3bed] transition-colors">
														{repo.name}
													</h3>
													<div className="flex items-center gap-3 mt-1 flex-wrap">
														<span
															className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
																repo.visibility === "Private"
																	? "bg-purple-900/30 text-purple-300"
																	: "bg-slate-700 text-slate-300"
															}`}
														>
															{repo.visibility}
														</span>
														<span className="flex items-center text-xs text-slate-400">
															<span className="material-symbols-outlined text-[14px] mr-1 text-yellow-500">
																star
															</span>
															{repo.stars}
														</span>
														<span className="text-xs text-slate-400">{repo.updated}</span>
													</div>
												</div>
											</div>
											<div className="flex items-center">
												<input
													type="checkbox"
													checked={isSelected}
													onChange={() => toggleRepo(repo.name)}
													className="w-5 h-5 accent-[#7c3bed] bg-[#1c1922] border border-[#2e2839] rounded focus:ring-[#7c3bed] focus:ring-2"
												/>
											</div>
										</button>
									);
								})}
							</div>

							<div className="p-3 bg-[#1b1821] border-t border-[#2e2839] flex justify-between items-center text-xs text-slate-400">
								<span>Showing {filteredRepos.length} of 12 repositories</span>
								<button className="text-[#7c3bed] hover:text-[#7c3bed]/80 font-medium transition-colors">
									Load more
								</button>
							</div>
						</div>

						<div className="bg-[#131118] rounded-xl border border-[#2e2839] p-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 rounded-lg bg-[#7c3bed]/10 text-[#7c3bed]">
									<span className="material-symbols-outlined">settings_suggest</span>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-white">
										Security Configuration
									</h3>
									<p className="text-sm text-slate-400">
										Customize how SecureCode AI interacts with your pull requests.
									</p>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div className="flex items-center justify-between">
									<div className="flex flex-col gap-1 pr-4">
										<label
											className="text-sm font-medium text-slate-200"
											htmlFor="block-prs"
										>
											Block PRs with Critical findings
										</label>
										<span className="text-xs text-slate-400">
											Prevent merging if high severity issues are found.
										</span>
									</div>
									<div className="relative inline-flex h-5 w-10 items-center">
										<input
											id="block-prs"
											type="checkbox"
											className="peer sr-only"
										/>
										<div className="h-5 w-10 rounded-full bg-slate-700 transition peer-checked:bg-[#7c3bed]" />
										<div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex flex-col gap-1 pr-4">
										<label
											className="text-sm font-medium text-slate-200"
											htmlFor="auto-comment"
										>
											Auto-comment on PR
										</label>
										<span className="text-xs text-slate-400">
											Bot posts a summary comment on every scan.
										</span>
									</div>
									<div className="relative inline-flex h-5 w-10 items-center">
										<input
											id="auto-comment"
											type="checkbox"
											defaultChecked
											className="peer sr-only"
										/>
										<div className="h-5 w-10 rounded-full bg-slate-700 transition peer-checked:bg-[#7c3bed]" />
										<div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
									</div>
								</div>

								<div className="col-span-1 md:col-span-2 pt-2 border-t border-slate-800 mt-2">
									<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
										<div className="flex flex-col gap-1">
											<label className="text-sm font-medium text-slate-200">
												Notification Threshold
											</label>
											<span className="text-xs text-slate-400">
												Minimum severity level to trigger email alerts.
											</span>
										</div>
										<div className="relative w-full md:w-64">
											<select className="block w-full pl-3 pr-10 py-2 text-base border border-[#2e2839] focus:outline-none focus:ring-[#7c3bed] focus:border-[#7c3bed] sm:text-sm rounded-lg bg-[#0f0d13] text-slate-100">
												<option>Critical only</option>
												<option selected>High and above</option>
												<option>Medium and above</option>
												<option>All severities</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-between pt-6 border-t border-[#2e2839] mt-6 mb-10">
							<button
								onClick={() => router.back()}
								className="flex items-center px-6 py-3 text-sm font-medium text-slate-300 bg-[#131118] border border-[#2e2839] rounded-lg hover:bg-[#1b1821] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7c3bed] focus:ring-offset-[#0a0a0f] transition-colors"
							>
								Back
							</button>
							<div className="flex gap-4 items-center">
								<span className="text-sm text-slate-400 hidden sm:inline">
									{selectedRepos.size} repositories selected
								</span>
								<button className="flex items-center gap-2 px-8 py-3 text-sm font-medium text-white bg-[#7c3bed] rounded-lg hover:bg-[#6f32da] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7c3bed] focus:ring-offset-[#0a0a0f] shadow-lg shadow-[#7c3bed]/25 transition-all transform hover:scale-[1.02]">
									Continue
									<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default SelectRepo;
