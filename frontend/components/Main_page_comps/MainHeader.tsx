"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainHeader() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#7c3bed]/10 bg-[rgba(10,10,15,0.8)] backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg border border-[#7c3bed]/30 bg-[#7c3bed]/20 p-2">
            <span className="material-symbols-outlined text-2xl text-[#7c3bed]">
              shield_with_heart
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            SecureCode AI
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a className="transition-colors hover:text-[#7c3bed]" href="#">
            Features
          </a>
          <a className="transition-colors hover:text-[#7c3bed]" href="#">
            Pricing
          </a>
          <a className="transition-colors hover:text-[#7c3bed]" href="#">
            Docs
          </a>
          <a className="transition-colors hover:text-[#7c3bed]" href="#">
            Blog
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant={"Sign_In_main"} asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button variant={"Get_Started_main"}>
            {" "}
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
