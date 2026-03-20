import { Inter } from "next/font/google";
import { PageLoader } from "@/components/ui/page-loader";

const inter = Inter({ subsets: ["latin"] });

export default function Loading() {
  return (
    <PageLoader
      title="Loading SecureCode AI"
      subtitle="Preparing your workspace..."
      className={inter.className}
    />
  );
}
