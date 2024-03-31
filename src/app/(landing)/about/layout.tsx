import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export const runtime = "edge";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex  h-full w-full flex-col">
      {children}
      <Footer />
    </div>
  );
}
