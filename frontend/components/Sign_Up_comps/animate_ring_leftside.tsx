"use client";

import { CSSProperties } from "react";

export default function AnimateRingLeftSide() {
  const floatStyle: CSSProperties = {
    animation: "float 6s ease-in-out infinite",
  };

  const floatDelayedStyle: CSSProperties = {
    animation: "float 8s ease-in-out infinite 1s",
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .floating-element-delayed {
          animation: float 8s ease-in-out infinite 1s;
        }
      `}</style>

      <div className="relative hidden lg:flex flex-col w-[60%] bg-[#0f0f12] overflow-hidden items-center justify-center p-12">
        {/* Background Effects */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(127, 19, 236, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f12] via-transparent to-[#1a1025]" />

        {/* Glowing Orb Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7f13ec]/20 blur-[100px] rounded-full" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-xl text-center">
          {/* Floating Visuals */}
          <div className="relative w-64 h-64 mb-12">
            {/* Shield Icon */}
            <div
              className="absolute inset-0 flex items-center justify-center text-[#7f13ec] floating-element"
              style={floatStyle}
            >
              <span
                className="material-symbols-outlined drop-shadow-[0_0_25px_rgba(127,19,236,0.6)]"
                style={{
                  fontSize: 180,
                  fontVariationSettings: "'FILL' 1, 'wght' 400",
                }}
              >
                security
              </span>
            </div>

            {/* Code Snippet 1 - Top Right */}
            <div
              className="absolute -top-4 -right-12 glass-panel p-3 rounded-lg text-xs font-mono text-green-400 floating-element-delayed shadow-xl"
              style={floatDelayedStyle}
            >
              <div className="opacity-75">if (isSecured) {"{"}</div>
              <div className="pl-4 opacity-75">allowAccess();</div>
              <div className="opacity-75">{"}"}</div>
            </div>

            {/* Code Snippet 2 - Bottom Left */}
            <div
              className="absolute -bottom-8 -left-8 glass-panel p-3 rounded-lg text-xs font-mono text-blue-400 floating-element shadow-xl"
              style={{ ...floatStyle, animationDuration: "7s" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 16 }}
                >
                  verified_user
                </span>
                <span>Protection Active</span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Automated Security for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-purple-400">
              Modern Stack
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            Join thousands of developers using AI-driven analysis to protect
            their codebases from vulnerabilities before deployment.
          </p>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
            <div
              className="h-8 w-24 bg-white/10 rounded animate-pulse"
              style={{ animationDelay: "0.075s" }}
            />
            <div
              className="h-8 w-24 bg-white/10 rounded animate-pulse"
              style={{ animationDelay: "0.15s" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
