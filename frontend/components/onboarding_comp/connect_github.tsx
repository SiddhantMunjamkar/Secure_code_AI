"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import Header from "@/components/dashboard/header";

const inter = Inter({ subsets: ["latin"] });

export function ConnectGithub() {
	const router = useRouter();
	const { user } = useAuth();

	return (
		<div className={`${inter.className} bg-[#0a0a0f] min-h-screen flex flex-col overflow-x-hidden text-slate-100 selection:bg-[#7c3bed]/30`}>
			<Header avatarUrl={user?.avatar_url} />

			<main className="flex-grow flex flex-col items-center justify-center relative pt-24 pb-12 px-4">
				<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
					<div className="absolute inset-0 bg-[size:24px_24px] bg-grid-pattern opacity-[0.05]"></div>
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"></div>
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
				</div>

				<div className="w-full max-w-[640px] z-10 flex flex-col gap-8">
					<div className="flex items-center justify-between w-full px-8 relative">
						<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10 translate-y-[-50%]"></div>

						<div className="flex flex-col items-center gap-2 bg-[#0a0a0f] px-2">
							<div className="size-10 rounded-full bg-[#7c3bed] flex items-center justify-center text-white ring-4 ring-[#0a0a0f] shadow-lg shadow-[#7c3bed]/25">
								<span className="material-symbols-outlined text-xl">link</span>
							</div>
							<span className="text-xs font-semibold text-[#7c3bed]">Connect</span>
						</div>

						<div className="flex flex-col items-center gap-2 bg-[#0a0a0f] px-2">
							<div className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 ring-4 ring-[#0a0a0f]">
								<span className="material-symbols-outlined text-xl">tune</span>
							</div>
							<span className="text-xs font-medium text-slate-500">
								Configure
							</span>
						</div>

						<div className="flex flex-col items-center gap-2 bg-[#0a0a0f] px-2">
							<div className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 ring-4 ring-[#0a0a0f]">
								<span className="material-symbols-outlined text-xl">rocket_launch</span>
							</div>
							<span className="text-xs font-medium text-slate-500">
								Deploy
							</span>
						</div>
					</div>

					<div className="w-full bg-[#131118] border border-slate-700 rounded-2xl shadow-xl p-8 sm:p-10 flex flex-col items-center text-center">
						<div className="mb-6 p-4 rounded-full bg-slate-800 text-white">
							<svg aria-hidden="true" className="w-12 h-12 fill-current" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.685-4.566 4.938.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
								></path>
							</svg>
						</div>
						<h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
							Connect Your GitHub Account
						</h1>
						<p className="text-slate-400 text-base max-w-md mx-auto mb-8 leading-relaxed">
							SecureCode AI needs access to your repositories to analyze pull requests
							and provide real-time security suggestions.
						</p>

						<div className="w-full max-w-sm bg-[#1e1b24] rounded-xl p-5 mb-8 border border-slate-700">
							<p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4 text-left">
								Requested Permissions
							</p>
							<ul className="space-y-3">
								<li className="flex items-center gap-3 text-sm text-slate-300">
									<span className="material-symbols-outlined text-[#7c3bed] text-[20px]">
										check_circle
									</span>
									<span>Read pull requests</span>
								</li>
								<li className="flex items-center gap-3 text-sm text-slate-300">
									<span className="material-symbols-outlined text-[#7c3bed] text-[20px]">
										check_circle
									</span>
									<span>Post PR comments</span>
								</li>
								<li className="flex items-center gap-3 text-sm text-slate-300">
									<span className="material-symbols-outlined text-[#7c3bed] text-[20px]">
										check_circle
									</span>
									<span>Read repository metadata</span>
								</li>
							</ul>
						</div>

						<button className="w-full max-w-sm group relative flex items-center justify-center gap-3 bg-[#7c3bed] hover:bg-[#6f32da] text-white text-base font-bold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-[#7c3bed]/25 hover:scale-[1.01] hover:cursor-pointer">
							<svg aria-hidden="true" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.685-4.566 4.938.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
								></path>
							</svg>
							<span className="text-white">Connect with GitHub</span>
						</button>

						<button
							onClick={() => router.push("/dashboard")}
							className="mt-6 text-sm text-slate-400 hover:text-[#7c3bed] transition-colors font-medium hover:cursor-pointer"
						>
							Skip for now
						</button>
					</div>

					<p className="text-center text-xs text-slate-600">
						By connecting, you agree to our Terms of Service and Privacy Policy.
					</p>
				</div>
			</main>
		</div>
	);
}

export default ConnectGithub;
