"use client";

import AnimateRingLeftSide from "@/components/Sign_Up_comps/animate_ring_leftside";
import SignUpForm from "@/components/Sign_Up_comps/sign_up_form";

export default function LoginPage() {
  const handleSignIn = async (values: { email: string; password: string }) => {
    // TODO: call your auth API here
    console.log("Sign in:", values);
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-[#0f0a15] text-white overflow-y-auto">
      {/* LEFT SIDE 60% */}
      <AnimateRingLeftSide />

      {/* RIGHT SIDE 40% */}
      <SignUpForm onSubmit={handleSignIn} />
    </div>
  );
}
