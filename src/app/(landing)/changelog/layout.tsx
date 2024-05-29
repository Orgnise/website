import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export const runtime = "edge";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-56px)] w-full flex-col bg-background">
      {children}
      <Footer />
    </div>
  );
}
