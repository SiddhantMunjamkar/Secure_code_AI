export default function Footer() {
	const companies = [
		"TECHFLOW",
		"DATAWAVE",
		"CYBERNET",
		"VOID-OPS",
		"NEXUS-CODE"
	];

	const testimonials = [
		{
			quote: "SecureCode AI changed how we think about security. It's no longer a bottleneck at the end of the sprint, but a partner that helps us code better every single day.",
			author: "Alex Rivers",
			title: "CTO at TechFlow",
			avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1W1UZJRKMGTl5-z0WxTYa3foOLJC7yMBVaz466y6r-2dt8O5sYoTf7DnElnUBcuLfampvA2g7hweNXtTPnTUcOQhUvhM3zQGF5TcTrWM-HtcvoaxHzwANm2YaQz1GILqcw1x63ZHe0KAr9M17Oa_XZKcO2CYAOMbe_9IQJsDrLQMWRK8Sm7T17oz1GCACRPaSZwiSw80rvzuBM6dPlm_Wh9mGBZdTmuaUPy_gMzhKi2h4OZmKToGio3QHXbJxgjve1TV8-mTAGHY"
		},
		{
			quote: "The remediation engine is scary accurate. It has saved our team hundreds of hours that would have been spent manually fixing vulnerabilities.",
			author: "Sarah Chen",
			title: "Security Lead at CyberNet",
			avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiXrH1EtoeNmbExkIpCtF_goIyK-6HN_Cc93lGgQvqOQ-QHNL9cODkz_bdUFYP6o7dqrh8v1rv5MMdB30x_C79L6ojWBJIMLHhts_uWEFpTJCS-Qti9VcKcWam25sgpo66mqK1Diqsjg-FUd1BhtnfGNCpre57A0mgme_WcG0HoDq4cBvPjldJljRY15nVgS0dotxDEB9sGhNkgihqnXGXeTg1oJr9Sc9RjxN4ij7o2zjWZDdMRaZtOj91qunYlKYKhbvGE43-l_A"
		}
	];

	const productLinks = [
		{ label: "Features", href: "#" },
		{ label: "Integrations", href: "#" },
		{ label: "Pricing", href: "#" },
		{ label: "Changelog", href: "#" }
	];

	const resourceLinks = [
		{ label: "Documentation", href: "#" },
		{ label: "API Reference", href: "#" },
		{ label: "Security Blog", href: "#" },
		{ label: "Support", href: "#" }
	];

	const companyLinks = [
		{ label: "About Us", href: "#" },
		{ label: "Careers", href: "#" },
		{ label: "Legal", href: "#" },
		{ label: "Privacy", href: "#" }
	];

	const legalLinks = [
		{ label: "Status", href: "#" },
		{ label: "Privacy Policy", href: "#" },
		{ label: "Terms of Service", href: "#" }
	];

	return (
		<>
			{/* Testimonials Section */}
			<section className="max-w-[1400px] mx-auto px-6 mt-40">
				{/* Companies Logos */}
				<div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
					{companies.map((company, index) => (
						<div key={index} className="text-xl font-bold tracking-tighter text-slate-700 dark:text-slate-300">
							{company}
						</div>
					))}
				</div>

				{/* Testimonials */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="p-8 rounded-2xl bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1f1f2e] italic text-slate-600 dark:text-slate-300"
						>
							{/* Quote */}
							<p className="mb-6">&ldquo;{testimonial.quote}&rdquo;</p>

							{/* Author Info */}
							<div className="flex items-center gap-4 not-italic">
								{/* Avatar */}
								<div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 overflow-hidden shrink-0">
									<img
										alt={`${testimonial.author} avatar`}
										src={testimonial.avatar}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Name and Title */}
								<div>
									<p className="font-bold text-slate-900 dark:text-white">{testimonial.author}</p>
									<p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Footer Section */}
			<footer className="bg-slate-100 dark:bg-[#050508] border-t border-slate-200 dark:border-[#1f1f2e] py-20 mt-40">
				<div className="max-w-[1400px] mx-auto px-6">
					{/* Footer Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
						{/* Branding Section */}
						<div className="lg:col-span-2">
							{/* Logo */}
							<div className="flex items-center gap-3 mb-6">
								<div className="bg-[#7c3bed]/20 p-2 rounded-lg border border-[#7c3bed]/30">
									<span className="material-symbols-outlined text-[#7c3bed] text-xl">shield_with_heart</span>
								</div>
								<span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">SecureCode AI</span>
							</div>

							{/* Description */}
							<p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mb-8">The next generation of autonomous application security for modern engineering teams.</p>

							{/* Social Links */}
							<div className="flex gap-4">
								<a className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-[#12121a] border border-slate-300 dark:border-[#1f1f2e] flex items-center justify-center hover:bg-[#7c3bed]/20 transition-colors" href="#">
									<span className="material-symbols-outlined text-lg">public</span>
								</a>
								<a className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-[#12121a] border border-slate-300 dark:border-[#1f1f2e] flex items-center justify-center hover:bg-[#7c3bed]/20 transition-colors" href="#">
									<span className="material-symbols-outlined text-lg">terminal</span>
								</a>
							</div>
						</div>

						{/* Product Links */}
						<div>
							<h5 className="font-bold text-slate-900 dark:text-white mb-6">Product</h5>
							<ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
								{productLinks.map((link, index) => (
									<li key={index}>
										<a className="hover:text-[#7c3bed] transition-colors" href={link.href}>{link.label}</a>
									</li>
								))}
							</ul>
						</div>

						{/* Resources Links */}
						<div>
							<h5 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h5>
							<ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
								{resourceLinks.map((link, index) => (
									<li key={index}>
										<a className="hover:text-[#7c3bed] transition-colors" href={link.href}>{link.label}</a>
									</li>
								))}
							</ul>
						</div>

						{/* Company Links */}
						<div>
							<h5 className="font-bold text-slate-900 dark:text-white mb-6">Company</h5>
							<ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
								{companyLinks.map((link, index) => (
									<li key={index}>
										<a className="hover:text-[#7c3bed] transition-colors" href={link.href}>{link.label}</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Copyright & Legal Links */}
					<div className="mt-20 pt-8 border-t border-slate-200 dark:border-[#1f1f2e] flex flex-col md:flex-row justify-between gap-6 text-xs text-slate-500">
						<p>&copy; 2026 SecureCode AI Inc. All rights reserved.</p>
						<div className="flex gap-8">
							{legalLinks.map((link, index) => (
								<a key={index} className="hover:text-slate-900 dark:hover:text-white transition-colors" href={link.href}>{link.label}</a>
							))}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
