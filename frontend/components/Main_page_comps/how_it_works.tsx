export default function HowItWorks() {
	const steps = [
		{
			number: "1",
			title: "Connect",
			description: "Link your GitHub or GitLab account in seconds via OAuth.",
			icon: "hub",
			bgColor: "bg-[#7c3bed]/20",
			borderColor: "border-[#7c3bed]/40",
			textColor: "text-[#7c3bed]",
			shadowColor: "shadow-[#7c3bed]/10"
		},
		{
			number: "2",
			title: "Scan",
			description: "AI analyzes every line of code for thousands of potential threats.",
			icon: "psychology",
			bgColor: "bg-cyan-400/20",
			borderColor: "border-cyan-400/40",
			textColor: "text-cyan-400",
			shadowColor: "shadow-cyan-400/10"
		},
		{
			number: "3",
			title: "Fix",
			description: "Review the suggested fix and merge it with a single click.",
			icon: "task_alt",
			bgColor: "bg-emerald-500/20",
			borderColor: "border-emerald-500/40",
			textColor: "text-emerald-500",
			shadowColor: "shadow-emerald-500/10"
		}
	];

	return (
		<section className="max-w-[1400px] mx-auto px-6 mt-32 relative">
			<div className="text-center mb-20">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">How It Works</h2>
				<p className="text-slate-600 dark:text-slate-400">Integrate, Analyze, and Secure in three simple steps.</p>
			</div>

			<div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
				{/* Connecting Line */}
				<div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#7c3bed]/5 via-cyan-400/30 to-emerald-500/5 hidden lg:block -translate-y-1/2"></div>

				{/* Steps */}
				{steps.map((step, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center gap-6 relative z-10 w-full lg:w-1/3"
					>
						<div
							className={`w-16 h-16 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center ${step.textColor} shadow-xl ${step.shadowColor}`}
						>
							<span className="material-symbols-outlined text-3xl">
								{step.icon}
							</span>
						</div>
						<div>
							<h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{step.number}. {step.title}</h4>
							<p className="text-sm text-slate-600 dark:text-slate-400 max-w-[250px] mx-auto">
								{step.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
