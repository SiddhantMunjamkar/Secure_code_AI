import { Button } from "@/components/ui/button"

export default function DemoPage() {
	return (
		<div className="relative">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(124,59,237,0.15)_0%,rgba(6,182,212,0.05)_50%,transparent_70%)] -z-10 pointer-events-none"></div>
			
			<section className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				{/* Left Column */}
				<div className="flex flex-col gap-8">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3bed]/10 border border-[#7c3bed]/20 w-fit">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
						</span>
						<span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">New: LLM Engine 4.0</span>
					</div>

					{/* Heading */}
					<h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white">
						Ship Secure Code.{" "}
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3bed] to-cyan-400 drop-shadow-[0_0_15px_rgba(124,59,237,0.3)]">
							Automatically.
						</span>
					</h1>

					{/* Description */}
					<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
						Catch pre-production vulnerabilities before they reach deployment with our AI-powered security engine. Integrated directly into your CI/CD pipeline.
					</p>

					{/* Buttons */}
					<div className="flex flex-wrap gap-4">
						<Button variant="Demo_Primary" size="demoHero" className="transition-all">
							Start Free Trial
							<span className="material-symbols-outlined text-sm">arrow_forward</span>
						</Button>
						<Button variant="Demo_Secondary" size="demoHero" className="transition-all">
							<span className="material-symbols-outlined text-sm">play_circle</span>
							View Demo
						</Button>
					</div>
				</div>

				{/* Right Column - Code Window */}
				<div className="relative group">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-[#7c3bed]/30 to-cyan-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
					<div className="relative bg-slate-900 border border-[#1f1f2e] rounded-2xl overflow-hidden shadow-2xl">
						{/* Window Bar */}
						<div className="h-10 bg-[#1e1e2e] border-b border-[#1f1f2e] flex items-center px-4 gap-1.5">
							<div className="w-3 h-3 rounded-full bg-red-500/30"></div>
							<div className="w-3 h-3 rounded-full bg-amber-500/30"></div>
							<div className="w-3 h-3 rounded-full bg-emerald-500/30"></div>
							<div className="ml-4 text-[11px] text-slate-500 font-mono tracking-wider uppercase">auth_service.py</div>
						</div>

						{/* Code Content */}
						<div className="p-6 font-mono text-sm space-y-1 text-slate-300">
							<div className="flex">
								<span className="w-8 text-slate-600">38</span>
								<span className="text-purple-400">def</span> <span className="text-blue-400">login_user</span>
								<span>(req):</span>
							</div>
							<div className="flex">
								<span className="w-8 text-slate-600">39</span>
								<span className="pl-4">username = req.form[</span>
								<span className="text-amber-200">{"'user'"}</span>
								<span>]</span>
							</div>
							<div className="flex">
								<span className="w-8 text-slate-600">40</span>
								<span className="pl-4">password = req.form[</span>
								<span className="text-amber-200">{"'pass'"}</span>
								<span>]</span>
							</div>
							<div className="flex">
								<span className="w-8 text-slate-600">41</span>
							</div>
							<div className="flex relative group/tooltip bg-red-500/15 border-l-2 border-red-500 pl-4">
								<span className="w-8 text-slate-600">42</span>
								<span className="pl-4">query = f</span>
								<span className="text-amber-200">{'"SELECT * FROM users WHERE u=\'{username}\'"'}</span>
								<div className="absolute left-10 -top-12 bg-red-500 text-white px-3 py-2 rounded shadow-xl text-xs flex items-center gap-2 z-10 whitespace-nowrap">
									<span className="material-symbols-outlined text-sm">report_problem</span>
									<span>SQL Injection detected - Line 42</span>
									<div className="absolute -bottom-1 left-4 w-2 h-2 bg-red-500 rotate-45"></div>
								</div>
							</div>
							<div className="flex">
								<span className="w-8 text-slate-600">43</span>
								<span className="pl-4">db.execute(query)</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="max-w-[1400px] mx-auto px-6 mt-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Vulnerabilities Card */}
				<div className="group relative p-8 rounded-2xl bg-white dark:bg-[#0f0f14] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-[#7c3bed]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between overflow-hidden min-h-[180px]">
						<div className="absolute inset-0 bg-gradient-to-br from-[#7c3bed]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative z-10 flex justify-between items-start">
							<div className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">Vulnerabilities caught</span>
								<p className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">15,847</p>
							</div>
							<div className="w-14 h-14 rounded-full bg-[#7c3bed]/10 border border-[#7c3bed]/20 flex items-center justify-center text-[#7c3bed] shadow-[0_0_20px_rgba(124,59,237,0.15)] group-hover:scale-110 transition-transform duration-500">
								<span className="material-symbols-outlined text-3xl">bug_report</span>
							</div>
						</div>
						<div className="relative z-10 mt-auto pt-2">
							<div className="w-full h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
								<div className="h-full bg-[#7c3bed] rounded-full shadow-[0_0_8px_rgba(124,59,237,0.5)]" style={{ width: '85%' }}></div>
							</div>
						</div>
					</div>

					{/* Developers Card */}
					<div className="group relative p-8 rounded-2xl bg-white dark:bg-[#0f0f14] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-cyan-400/10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between overflow-hidden min-h-[180px]">
						<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative z-10 flex justify-between items-start">
							<div className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">Active Developers</span>
								<p className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">2,400+</p>
							</div>
							<div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform duration-500">
								<span className="material-symbols-outlined text-3xl">groups</span>
							</div>
						</div>
						<div className="relative z-10 mt-auto pt-6">
							<div className="w-full h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
								<div className="h-full bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" style={{ width: '70%' }}></div>
							</div>
						</div>
					</div>

					{/* Accuracy Card */}
				<div className="group relative p-8 rounded-2xl bg-white dark:bg-[#0f0f14] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between overflow-hidden min-h-[180px]">
						<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="relative z-10 flex justify-between items-start">
							<div className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">Accuracy Rate</span>
								<p className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">99.2%</p>
							</div>
							<div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-500">
								<span className="material-symbols-outlined text-3xl">verified_user</span>
							</div>
						</div>
						<div className="relative z-10 mt-auto pt-6">
							<div className="w-full h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
								<div className="h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" style={{ width: '95%' }}></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
