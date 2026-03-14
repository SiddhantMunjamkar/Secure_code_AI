export default function AnimateRingLeftSide() {
  return (
    <div className="relative hidden lg:flex w-full lg:w-3/5 bg-[#0f0a15] flex-col justify-center items-center overflow-hidden p-8">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,19,236,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,rgba(15,10,21,0)_0%,rgba(15,10,21,1)_100%)] pointer-events-none z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#2a2a3e 1px, transparent 1px), linear-gradient(90deg, #2a2a3e 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center max-w-2xl w-full">
        {/* Main Visual: Shield & Code */}
        <div className="relative w-[460px] h-[55vh] flex items-center justify-center mb-6">
          {/* Central Shield Icon */}
          <div className="relative z-20 animate-pulse-glow bg-[#1a1324] border border-[#7f13ec]/30 p-8 rounded-2xl shadow-[0_0_20px_rgba(127,19,236,0.5)]">
            <span
              className="material-symbols-outlined text-[#7f13ec]"
              style={{ fontSize: 120, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48", display: "block", lineHeight: 1 }}
            >
              security
            </span>
          </div>

          {/* Card 1: Vulnerability Detected */}
          <div className="absolute top-10 right-0 code-block border border-[#ff2a6d]/30 p-4 rounded-xl shadow-[0_0_15px_rgba(255,42,109,0.4)] animate-float-medium w-64 rotate-3">
            <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
              <div className="w-2 h-2 rounded-full bg-[#ff2a6d]" />
              <span className="text-xs font-mono text-[#ff2a6d]">Critical Vulnerability</span>
            </div>
            <div className="font-mono text-xs text-slate-400 space-y-1">
              <p>
                <span className="text-[#7f13ec]">function</span>{" "}
                <span className="text-[#ffc857]">auth</span>() {"{"}
              </p>
              <p className="pl-4 text-white/50">{`// Unsanitized input`}</p>
              <p className="pl-4 bg-[#ff2a6d]/10 border-l-2 border-[#ff2a6d] text-white">
                query = &quot;SELECT * FROM...&quot;
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          {/* Card 2: Secure Code */}
          <div className="absolute bottom-20 left-0 code-block border border-[#7f13ec]/30 p-4 rounded-xl shadow-[0_0_10px_rgba(127,19,236,0.3)] animate-float-slow w-72 -rotate-2">
            <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
              <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
              <span className="text-xs font-mono text-[#00f0ff]">Scanning Complete</span>
            </div>
            <div className="font-mono text-xs text-slate-400 space-y-1">
              <p>
                <span className="text-[#7f13ec]">const</span>{" "}
                <span className="text-white">secureHash</span> =
              </p>
              <p className="pl-4 text-[#00f0ff]">await bcrypt.hash(pwd)</p>
              <p className="text-green-400 text-[10px] mt-2">&#10003; No threats found</p>
            </div>
          </div>

          {/* Decorative Circles */}
          <div
            className="absolute inset-0 border border-[#7f13ec]/10 rounded-full scale-125 animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute inset-0 border border-dashed border-[#7f13ec]/20 rounded-full scale-150 animate-spin"
            style={{ animationDuration: "30s", animationDirection: "reverse" }}
          />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Catch vulnerabilities
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-[#00f0ff]">
              before they catch you.
            </span>
          </h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            SecureCode AI analyzes your codebase in real-time, identifying potential threats before they deploy.
          </p>
        </div>
      </div>
    </div>
  );
}
