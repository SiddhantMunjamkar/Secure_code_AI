import { cn } from "@/lib/utils";

interface PageLoaderProps {
  title?: string;
  subtitle?: string;
  fullScreen?: boolean;
  className?: string;
}

export function PageLoader({
  title = "Preparing your dashboard",
  subtitle = "Syncing profile and repository insights...",
  fullScreen = true,
  className,
}: PageLoaderProps) {
  return (
    <div
      className={cn(
        "bg-[#0a0a0f] flex items-center justify-center px-6",
        fullScreen ? "min-h-screen" : "h-full min-h-60",
        className,
      )}
    >
      <div className="relative w-full max-w-sm rounded-2xl border border-[#2e2839] bg-[#131118]/70 px-7 py-6 shadow-2xl backdrop-blur-sm">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-r from-[#7c3bed]/0 via-[#7c3bed]/15 to-[#7c3bed]/0 opacity-70" />

        <div className="relative flex items-center gap-4">
          <div className="relative flex size-11 items-center justify-center rounded-xl border border-[#2e2839] bg-[#0f0c16]">
            <span className="absolute inset-0 rounded-xl bg-[#7c3bed]/15 blur-md" />
            <span className="relative material-symbols-outlined text-[22px] text-[#b084ff]">
              shield_lock
            </span>
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-100">{title}</p>
            <p className="mt-1 text-xs text-slate-400">{subtitle}</p>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#2e2839]">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-linear-to-r from-[#7c3bed] via-[#9f67ff] to-[#7c3bed]" />
            </div>
          </div>

          <span className="inline-block size-5 rounded-full border-2 border-[#2e2839] border-t-[#7c3bed] animate-spin" />
        </div>
      </div>
    </div>
  );
}
