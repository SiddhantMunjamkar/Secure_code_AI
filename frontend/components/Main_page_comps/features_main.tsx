export default function FeaturesMain() {
	const features = [
		{
			icon: "account_tree",
			color: "text-[#7c3bed]",
			borderColor: "hover:border-[#7c3bed]/50",
			title: "GitHub Integration",
			description: "Native support for GitHub Actions and Enterprise. Scan every pull request automatically before code is merged."
		},
		{
			icon: "neurology",
			color: "text-cyan-400",
			borderColor: "hover:border-cyan-400/50",
			title: "AI Analysis",
			description: "Deep context-aware analysis using our proprietary LLM models trained on millions of security patches."
		},
		{
			icon: "auto_fix_high",
			color: "text-emerald-500",
			borderColor: "hover:border-emerald-500/50",
			title: "One-Click Remediation",
			description: "Don't just find bugs—fix them. We generate ready-to-merge PRs that resolve identified vulnerabilities."
		},
		{
			icon: "monitoring",
			color: "text-[#7c3bed]",
			borderColor: "hover:border-[#7c3bed]/50",
			title: "Security Trends",
			description: "Visualize your security posture over time with detailed dashboards and executive-level reports."
		},
		{
			icon: "notifications_active",
			color: "text-cyan-400",
			borderColor: "hover:border-cyan-400/50",
			title: "Smart Notifications",
			description: "Get alerted on Slack or Teams only when critical risks are found. No alert fatigue from noise."
		},
		{
			icon: "gavel",
			color: "text-emerald-500",
			borderColor: "hover:border-emerald-500/50",
			title: "Custom Rules Engine",
			description: "Define organization-specific compliance rules and security standards to enforce across all repos."
		}
	];

	return (
		<section className="max-w-[1400px] mx-auto px-6 mt-32">
			<div className="mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Enterprise-Grade Security</h2>
				<p className="text-slate-600 dark:text-slate-400 max-w-2xl">A comprehensive suite of AI tools designed to protect your code from commit to production.</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className={`p-8 rounded-2xl bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1f1f2e] ${feature.borderColor} transition-colors group`}
					>
						<span className={`material-symbols-outlined ${feature.color} text-3xl mb-6 block  transition-transform`}>
							{feature.icon}
						</span>
						<h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
						<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
