"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signUpSchema = z.object({
  Name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
  onSubmit?: (values: SignUpFormValues) => void | Promise<void>;
}

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onFormSubmit = async (values: SignUpFormValues) => {
    await onSubmit?.(values);
  };

  const password = watch("password");

  // Calculate password strength
  const getPasswordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength();

  const getStrengthLabel = () => {
    if (passwordStrength <= 1) return "Weak";
    if (passwordStrength === 2) return "Medium";
    if (passwordStrength === 3) return "Strong";
    return "Very Strong";
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return "text-red-500";
    if (passwordStrength === 2) return "text-yellow-500";
    if (passwordStrength === 3) return "text-green-500";
    return "text-green-600";
  };

  return (
    <div className="w-full lg:w-2/5 h-full bg-[#0f0a15] flex flex-col justify-center items-center ">
      <div className="w-full max-w-[380px] mx-auto flex flex-col gap-5 px-6 py-8">
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
            Start securing your code
          </h2>
          <p className="text-slate-400 text-sm">Create your account to get started.</p>
        </div>

        {/* GitHub Button */}
        <button className="w-full flex items-center justify-center gap-3 rounded-lg bg-[#2a3f3a] px-4 py-3 text-white transition-all hover:bg-[#354a48] font-semibold text-sm">
          <svg
            aria-hidden="true"
            className="h-5 w-5 fill-white"
            viewBox="0 0 24 24"
          >
            <path
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              fillRule="evenodd"
            />
          </svg>
          <span>Sign up with GitHub</span>
        </button>

        {/* Divider */}
        <div className="relative my-1">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2a2a3e]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0f0a15] px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300"
            >
              Full Name
            </label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="block w-full rounded-xl bg-[#1a1a2e] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-[#7f13ec] focus:ring-[#7f13ec] sm:text-sm pl-4 pr-10"
                {...register("Name")}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span
                  className="material-symbols-outlined text-slate-500 text-lg"
                  style={{ fontSize: 18 }}
                >
                  person
                </span>
              </div>
            </div>
            {errors.Name && (
              <p className="text-xs text-red-400 mt-0.5">
                {errors.Name.message}
              </p>
            )}
          </div>

          {/* Work Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300"
            >
              Work Email
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="block w-full rounded-xl bg-[#1a1a2e] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-[#7f13ec] focus:ring-[#7f13ec] sm:text-sm pl-4 pr-10"
                {...register("email")}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span
                  className="material-symbols-outlined text-slate-500 text-lg"
                  style={{ fontSize: 18 }}
                >
                  mail
                </span>
              </div>
            </div>
            {errors.email && (
              <p className="text-xs text-red-400 mt-0.5">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300"
            >
              Password
            </label>
            <div className="relative group">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="block w-full rounded-xl bg-[#1a1a2e] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-[#7f13ec] focus:ring-[#7f13ec] sm:text-sm pl-4 pr-10"
                {...register("password")}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span
                  className="material-symbols-outlined text-slate-500 text-lg"
                  style={{ fontSize: 18 }}
                >
                  lock
                </span>
              </div>
            </div>

            {/* Password Strength Indicator */}
            {password && (
              <>
                <div className="flex gap-1 pt-1 h-1.5">
                  <div
                    className={`h-full w-1/4 rounded-full ${
                      passwordStrength >= 1
                        ? "bg-red-500/80"
                        : "bg-slate-700/30"
                    }`}
                  />
                  <div
                    className={`h-full w-1/4 rounded-full ${
                      passwordStrength >= 2
                        ? "bg-yellow-500/80"
                        : "bg-slate-700/30"
                    }`}
                  />
                  <div
                    className={`h-full w-1/4 rounded-full ${
                      passwordStrength >= 3
                        ? "bg-green-500/80"
                        : "bg-slate-700/30"
                    }`}
                  />
                  <div
                    className={`h-full w-1/4 rounded-full ${
                      passwordStrength >= 4
                        ? "bg-green-500/80"
                        : "bg-slate-700/30"
                    }`}
                  />
                </div>
                <p className={`text-xs text-right mt-1 ${getStrengthColor()}`}>
                  Strength: {getStrengthLabel()}
                </p>
              </>
            )}

            {errors.password && (
              <p className="text-xs text-red-400 mt-0.5">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3">
            <Input
              id="terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="h-5 w-5 mt-0.5 cursor-pointer accent-[#7f13ec] border-[#2a2a3e] bg-[#1a1a2e] rounded"
            />
            <label htmlFor="terms" className="text-sm leading-6 cursor-pointer">
              <span className="font-medium text-slate-400">
                By signing up, you agree to the{" "}
                <a
                  href="#"
                  className="text-[#7f13ec] hover:text-[#7f13ec]/80 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#7f13ec] hover:text-[#7f13ec]/80 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !agreeTerms}
            className="w-full flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-[#7f13ec] to-[#a252f8] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#7f13ec]/25 hover:shadow-[#7f13ec]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f13ec] transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
            {!isSubmitting && (
              <span
                className="material-symbols-outlined text-sm font-bold"
                style={{ fontSize: 18 }}
              >
                arrow_forward
              </span>
            )}
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-1 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a
            href="/signin"
            className="font-bold text-[#7f13ec] hover:text-[#7f13ec]/80 transition-colors"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
