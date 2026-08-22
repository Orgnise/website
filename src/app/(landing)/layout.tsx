import { Background } from "@/components/background";
import { Navbar } from "@/components/nav-bar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Background />
      <div className="relative flex h-full flex-col">
        <Navbar />
        <div className="mt-[56px]">{children}</div>
      </div>
    </div>
  );
}
