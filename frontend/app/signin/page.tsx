"use client";

import AnimateRingLeftSide from "@/components/Sign_In_comps/animate_ring_leftside";
import LeftSideForm from "@/components/Sign_In_comps/left_side_form";

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
      <LeftSideForm onSubmit={handleSignIn} />
    </div>
  );
}
