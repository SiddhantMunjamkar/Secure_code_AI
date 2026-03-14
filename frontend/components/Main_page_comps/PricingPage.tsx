import { Button } from "@/components/ui/button";

export default function PricingPage() {
	const plans = [
		{
			name: "Free",
			price: "$0",
			description: "Perfect for open source contributors and hobbyists.",
			features: [
				"Public repositories only",
				"10 scans per month",
				"Community support"
			],
			button: "Start for Free",
			isPopular: false
		},
		{
			name: "Pro",
			price: "$49",
			description: "For professional developers and growing startups.",
			features: [
				"Unlimited private repos",
				"Automated PR fixes",
				"Custom scan rules",
				"Priority email support"
			],
			button: "Get Pro Started",
			isPopular: true
		},
		{
			name: "Team",
			price: "$199",
			description: "Advanced security for scaling engineering teams.",
			features: [
				"Everything in Pro",
				"SSO & SAML integration",
				"SOC2 Compliance exports",
				"Dedicated account manager"
			],
			button: "Contact Sales",
			isPopular: false
		}
	];

	return (
		<section className="max-w-[1400px] mx-auto px-6 mt-40">
			{/* Header */}
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Simple, Transparent Pricing</h2>
				<p className="text-slate-600 dark:text-slate-400">Scale security with your team growth.</p>
			</div>

			{/* Pricing Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{plans.map((plan, index) => (
					<div
						key={index}
						className={`p-8  rounded-3xl flex flex-col relative ${
							plan.isPopular
								? "bg-slate-100 dark:bg-[#12121a] border-2 border-[#7c3bed] shadow-xl shadow-[#7c3bed]/20"
								: "bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1f1f2e]"
						}`}
					>
						{/* Most Popular Badge */}
						{plan.isPopular && (
							<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7c3bed] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
								Most Popular
							</div>
						)}

						{/* Plan Name */}
						<h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{plan.name}</h3>

						{/* Price */}
						<div className="mb-6">
							<span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
							<span className="text-slate-500">/mo</span>
						</div>

						{/* Description */}
						<p className="text-sm text-slate-600 dark:text-slate-400 mb-8">{plan.description}</p>

						{/* Features List */}
						<ul className="space-y-4 mb-10 flex-grow">
							{plan.features.map((feature, featureIndex) => (
								<li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
									<span className="material-symbols-outlined text-[#7c3bed] text-xl shrink-0">check</span>
									{feature}
								</li>
							))}
						</ul>

						{/* Button */}
						<Button
							variant={plan.isPopular ? "Pricing_Popular" : "Pricing_Outline"}
							size="pricing"
						>
							{plan.button}
						</Button>
					</div>
				))}
			</div>
		</section>
	);
}
