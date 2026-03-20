"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import { useAuth } from "@/components/providers/AuthProvider";
import { PageLoader } from "@/components/ui/page-loader";
import DashboardHeader from "@/components/dashboard/header";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/signin");
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <PageLoader
        title="Preparing your dashboard"
        subtitle="Syncing profile and repository insights..."
        className={inter.className}
      />
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div
      className={`${inter.className} bg-[#0a0a0f] min-h-screen flex flex-col overflow-x-hidden text-slate-100 selection:bg-[#7c3bed]/30`}
    >
      <div className="flex h-full grow flex-col">
        <DashboardHeader avatarUrl={user.avatar_url} />

        <main className="flex flex-1 flex-col justify-center items-center py-12 lg:py-20 px-4">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1 gap-16">
            <div className="flex flex-col items-center gap-8 text-center animate-in fade-in duration-500">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#7c3bed]/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#131118]/50 border border-[#2e2839] p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                  <img
                    alt="High tech shield illustration with glowing purple circuit lines"
                    className="w-64 h-auto opacity-90 object-contain rounded-lg mix-blend-screen grayscale-[20%]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPlXCjSLHi9cCNl0hthYTwLW85GkeZwoKwW1c1VC7krijkS2BOp7BRk1x_3aQpoHBtROazafC4Hd_z6rmITSR9gl9r2w2oULrtw1TEcYpVYuEBSIl6n-fzVSbq1R5SzOxiOrRIQgPwUTeuIR99MrudtWY-9YMg3033ZRE5oKJEstYDo6ba80RiyAMlgBpa6mKlRo8O0zSxOPSdqBUwQbZ6rnxZW1sV17LQQ1Llhd0_P_SUFWXvZOlwNt62fsG9k5jmtYFOxqz6wu4"
                  />
                </div>
              </div>

              <div className="flex max-w-[540px] flex-col items-center gap-4">
                <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight tracking-tight">
                  Your security dashboard is ready
                </h1>
                <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
                  Connect your first GitHub repository to start scanning pull requests automatically and see real-time insights.
                </p>
              </div>

              <button className="group flex min-w-[200px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-6 bg-[#7c3bed] hover:bg-[#6f32da] text-white shadow-lg shadow-[#7c3bed]/25 transition-all transform hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-[20px]">add_link</span>
                <span className="text-sm font-bold leading-normal tracking-[0.015em]">
                  Connect GitHub Repository
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-2 items-center text-center">
                <h3 className="text-slate-200 text-lg font-bold">What you'll see here</h3>
                <p className="text-slate-400 text-sm">
                  Once connected, this dashboard will populate with these insights.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="group flex flex-col gap-4 p-4 rounded-xl border border-[#2e2839] bg-[#131118]/40 hover:bg-[#131118] transition-all duration-300">
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-[#0a0a0f]/50 border border-white/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                      <span className="material-symbols-outlined text-4xl text-slate-500">terminal</span>
                    </div>
                    <div
                      className="w-full h-full bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBRg3jjhdQ3IAawNYJUSdR-dp69mDd6cgc5vLXPFJDG4Tn1jC5XWI-ON53KxcLZkkSz7iLbPtt6T93u-XFrQtbKSoOCVOhQ7F0JnWknSjRjlc1gMPFOpptTO7IgnX8UVa48-avDq_mfY7PNC5wN7cf5DL672TFlW8AZCYicViUkH9JsNVgWf6R4vKWpxivnXNWP4-MNUMJDsmhskYtP3cBxPfmhsojqSgN5Z0e9XDaG1IS_eC_wZaNzHIJXb2BvrThXlFx7yeaJ8M')",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#7c3bed] text-sm">radar</span>
                      <p className="text-slate-200 text-sm font-bold leading-normal">PR Scans</p>
                    </div>
                    <p className="text-slate-400 text-xs font-normal leading-normal">
                      Automated security checks on every pull request.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col gap-4 p-4 rounded-xl border border-[#2e2839] bg-[#131118]/40 hover:bg-[#131118] transition-all duration-300">
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-[#0a0a0f]/50 border border-white/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                      <span className="material-symbols-outlined text-4xl text-slate-500">
                        auto_fix_high
                      </span>
                    </div>
                    <div
                      className="w-full h-full bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKQb5G5e7bGwWSO9owT-aMJ0R3vqrgubIFJKc73-CXuEhfB-tz-dU35RLB_RcQ1hudVcHPLP2JnLItZn0hBGJ2rVI82IDztj9KEukae5VOWVIPO-uyib2_tcwWkuz1fsLRyrxvWgNBLyZYXoGf_tkCJgJ_v_yAouT8Y_Dz2V8XKzSbjqOrOAChjCl_so75Vj1dYK-bcGxJjdPLg_lfqy7dIvRgkW0aJegUryOPh-F4DixDw2Y8QF17FUyxY0wGnam2Lat6lncFzqU')",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#7c3bed] text-sm">psychology</span>
                      <p className="text-slate-200 text-sm font-bold leading-normal">AI Remediation</p>
                    </div>
                    <p className="text-slate-400 text-xs font-normal leading-normal">
                      AI-suggested fixes for vulnerabilities found.
                    </p>
                  </div>
                </div>

                <div className="group flex flex-col gap-4 p-4 rounded-xl border border-[#2e2839] bg-[#131118]/40 hover:bg-[#131118] transition-all duration-300">
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-[#0a0a0f]/50 border border-white/5 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                      <span className="material-symbols-outlined text-4xl text-slate-500">ssid_chart</span>
                    </div>
                    <div
                      className="w-full h-full bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZTdCI_eDwosEvMZSPjN3MN-FzoUGML5MX1x3RzOPLHjGGuSFt3y07fA5jD2IffhH7f3zuIPu5h3UFvJtByxirUb3vfaDvTXc9D1ae0-FhAalJ4le80IDDBFoRBEeN2SRtEQyH7zGemcc3EYTnnKbwFVEJLOPM0sZzKpOCM0iJXHfxKHQlg078HE1ANi2a9qeAKgUaEGd8yGecAhKJAZW4VsjDnpNU3URusCn1d2sIE_4GfwA5xsseE5C5BqFOSh7MMIT4hMDoXYQ')",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#7c3bed] text-sm">
                        trending_up
                      </span>
                      <p className="text-slate-200 text-sm font-bold leading-normal">Security Trends</p>
                    </div>
                    <p className="text-slate-400 text-xs font-normal leading-normal">
                      Track your security posture over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
