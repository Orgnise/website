import { Footer } from "@/components/footer";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-56px)] w-full flex-col bg-background/50">
      {children}
      <Footer />
      <Toaster />
    </div>
  );
}
