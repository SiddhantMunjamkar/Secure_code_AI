export default function AutonomousRemediation() {
	const features = [
		"Automated Pull Request generation",
		"Verified zero-breaking-change fixes",
		"Security context provided for every fix"
	];

	
	return (
		<section className="max-w-[1400px] mx-auto px-6 mt-40">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900/50 dark:bg-[#12121a]/50 border border-[#1f1f2e] p-8 md:p-12 rounded-3xl">
				{/* Left Column */}

				
				<div>
					<h2 className="text-3xl font-bold mb-6 text-white">Autonomous Remediation</h2>
					<p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
						Why just find problems when you can fix them? Our AI engine doesn't just point out where you're vulnerable—it writes the patch for you. Review the diff and merge. Security has never been this fast.
					</p>

					<ul className="space-y-4">
						{features.map((feature, index) => (
							<li key={index} className="flex items-start gap-3">
								<span className="material-symbols-outlined text-emerald-500 shrink-0">check_circle</span>
								<span className="text-slate-600 dark:text-slate-400 text-sm">{feature}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Right Column - Code Blocks */}
				<div className="space-y-4">
					{/* Vulnerable Code Block */}
					<div className="rounded-xl bg-slate-900 border border-red-500/30 overflow-hidden shadow-2xl">
						<div className="bg-red-500/10 px-4 py-2 border-b border-red-500/30 flex justify-between items-center">
							<span className="text-xs font-bold text-red-500 uppercase tracking-widest">Vulnerable Code</span>
							<span className="material-symbols-outlined text-sm text-red-500">dangerous</span>
						</div>
						<div className="p-4 font-mono text-xs text-slate-400 overflow-x-auto space-y-1">
							<div className="bg-red-500/15 border-l-2 border-red-500 px-2 py-1">
								- query = "SELECT * FROM users WHERE id = '" + id + "'"
							</div>
							<div className="bg-red-500/15 border-l-2 border-red-500 px-2 py-1">
								- cursor.execute(query)
							</div>
						</div>
					</div>

					{/* AI Fix Block */}
					<div className="rounded-xl bg-slate-900 border border-emerald-500/30 overflow-hidden shadow-2xl">
						<div className="bg-emerald-500/10 px-4 py-2 border-b border-emerald-500/30 flex justify-between items-center">
							<span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">AI Fix Suggested</span>
							<span className="material-symbols-outlined text-sm text-emerald-500">auto_fix</span>
						</div>
						<div className="p-4 font-mono text-xs text-slate-400 overflow-x-auto space-y-1">
							<div className="bg-emerald-500/15 border-l-2 border-emerald-500 px-2 py-1 text-emerald-400">
								+ cursor.execute("SELECT * FROM users WHERE id = %s", (id,))
							</div>
							<div className="px-2 py-1">
								  # Use parameterized queries to prevent SQL injection
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
