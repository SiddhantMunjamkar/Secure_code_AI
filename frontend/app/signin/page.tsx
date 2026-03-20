"use client";

import { useRouter } from "next/navigation";
import AnimateRingLeftSide from "@/components/Sign_In_comps/animate_ring_leftside";
import LeftSideForm from "@/components/Sign_In_comps/left_side_form";
import { useAuth } from "@/components/providers/AuthProvider";
import { signInWithEmail } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();

  const handleSignIn = async (values: { email: string; password: string }) => {
    await signInWithEmail(values);
    await refreshUser();
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-[#0f0a15] text-white overflow-y-auto">
      {/* LEFT SIDE 60% */}
      <AnimateRingLeftSide />

      {/* RIGHT SIDE 40% */}
      <LeftSideForm onSubmit={handleSignIn} />
    </div>
  );
}
