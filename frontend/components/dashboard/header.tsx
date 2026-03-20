"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
	avatarUrl?: string;
}

const fallbackAvatarUrl =
	"https://lh3.googleusercontent.com/aida-public/AB6AXuBjl6Q7wSUr5yKQvI6ERURxJ2AO5xk4R8jgezFv8tE649aPE7huENU-P08cL2smL5O5kPETSjx2J2qKmnEBofm0qLXSvTguzIXY3CKcMD-uxQ-Nls2aoz0SRjIbNR3koVfJvz1mw6oYRKfsbuiav_hTu6JGrI9j4q9GR2hJJhJlcdNckdb4nCKYPxD5-RfAI6vu8dyWIJjJQnOJ6uA4jiR2dyAD6l48dmtelFTZ4dFiW367Z6-ihm_Eu9yltG4OebK1ChB0Z2ZSbA8";

const navItems = [
	{ label: "Dashboard", href: "/dashboard" },
	{ label: "Repositories", href: "/dashboard/repositories" },
	{ label: "Scans", href: "/dashboard/scans" },
	{ label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardHeader({ avatarUrl }: DashboardHeaderProps) {
	const pathname = usePathname();

	return (
		<header className="fixed w-full top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#2e2839] bg-[#0a0a0f]/70 px-6 py-3 backdrop-blur-sm supports-[backdrop-filter]:bg-[#0a0a0f]/60 lg:px-10">
			<div className="flex items-center gap-3">
				<div className="size-8 text-[#7c3bed] flex items-center justify-center">
					<span className="material-symbols-outlined text-3xl">shield_lock</span>
				</div>
				<h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">SecureCode AI</h2>
			</div>

			<div className="flex flex-1 justify-end items-center gap-4 lg:gap-8">
				<nav className="hidden md:flex h-10 items-center gap-8">
					{navItems.map((item) => {
						const isActive =
							pathname === item.href ||
							(pathname.startsWith(item.href + "/") && item.href !== "/dashboard");

						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"relative inline-flex h-10 items-center text-sm font-medium leading-normal transition-colors duration-200",
									isActive
										? "text-white"
										: "text-slate-400 hover:text-slate-200",
								)}
							>
								{item.label}
								<span
									className={cn(
										"pointer-events-none absolute inset-x-0 bottom-0 h-0.5 rounded-full transition-opacity duration-200",
										isActive ? "bg-[#7c3bed] opacity-100" : "bg-transparent opacity-0",
									)}
								/>
							</Link>
						);
					})}
				</nav>

				<div className="flex h-10 items-center gap-4">
					{/* <button className="flex h-10 items-center justify-center overflow-hidden rounded-lg px-4 bg-transparent border border-[#2e2839] hover:bg-[#2e2839]/50 text-slate-200 text-sm font-bold leading-normal transition-all">
						<span className="truncate">Docs</span>
					</button> */}

					<div
						className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-[#7c3bed]/20 cursor-pointer hover:ring-[#7c3bed]/50 transition-all"
						style={{ backgroundImage: `url(${avatarUrl || fallbackAvatarUrl})` }}
					/>
				</div>
			</div>
		</header>
	);
}
