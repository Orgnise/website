import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export const runtime = "edge";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full min-h-screen w-full overflow-y-auto">
      {children}
      <Footer />
    </div>
  );
}
