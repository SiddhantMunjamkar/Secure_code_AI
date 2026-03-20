"use client";

import { useRouter } from "next/navigation";
import AnimateRingLeftSide from "@/components/Sign_Up_comps/animate_ring_leftside";
import SignUpForm from "@/components/Sign_Up_comps/sign_up_form";
import { useAuth } from "@/components/providers/AuthProvider";
import { signUpWithEmail } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();

  const handleSignUp = async (values: {
    Name: string;
    email: string;
    password: string;
  }) => {
    await signUpWithEmail(values);
    await refreshUser();
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-[#0f0a15] text-white overflow-y-auto">
      {/* LEFT SIDE 60% */}
      <AnimateRingLeftSide />

      {/* RIGHT SIDE 40% */}
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
}
