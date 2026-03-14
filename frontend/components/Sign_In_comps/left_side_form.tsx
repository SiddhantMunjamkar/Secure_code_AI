"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

interface LeftSideFormProps {
  onSubmit?: (values: SignInFormValues) => void | Promise<void>;
}

export default function LeftSideForm({ onSubmit }: LeftSideFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onFormSubmit = async (values: SignInFormValues) => {
    await onSubmit?.(values);
  };

  return (
    <div className="w-full lg:w-2/5 h-full bg-[#1a1324] flex flex-col justify-center items-center">
      <div className="w-full max-w-[380px] mx-auto flex flex-col gap-5 px-6 py-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#7f13ec]/20 rounded-lg shrink-0">
              <span
                className="material-symbols-outlined text-[#7f13ec]"
                style={{ fontSize: 22, fontVariationSettings: "'FILL' 1" }}
              >
                shield_lock
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight">
              SecureCode AI
            </span>
          </div>
          <h2 className="text-[2rem] font-bold text-white leading-tight mb-2">
            Welcome back
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Enter your details to access your secure workspace.
          </p>
        </div>

        {/* GitHub */}
        <button
          className="w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-slate-100 transition-colors rounded-lg font-semibold text-sm cursor-pointer"
          style={{ height: 48 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Continue with GitHub
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-slate-500 text-xs">or continue with email</span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-300"
            >
              Email address
            </label>
            <div className="relative group">
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                className={`pl-10 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                {...register("email")}
              />
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#7f13ec] transition-colors select-none"
                style={{ fontSize: 18 }}
              >
                mail
              </span>
            </div>
            {errors.email && (
              <p className="text-xs text-red-400 mt-0.5">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-300"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm text-[#00f0ff] hover:opacity-80 transition-opacity"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative group">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`pl-10 pr-10 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                {...register("password")}
              />
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#7f13ec] transition-colors select-none"
                style={{ fontSize: 18 }}
              >
                lock
              </span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 20 }}
                >
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-400 mt-0.5">{errors.password.message}</p>
            )}
          </div>

          {/* Sign In */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#8b1cf5] hover:bg-[#9f4bf2] text-white font-bold rounded-lg shadow-[0_0_24px_rgba(139,28,245,0.5)] transition-all duration-200 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ height: 48 }}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-slate-500 text-sm">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-[#00f0ff] hover:underline font-semibold ml-1"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
