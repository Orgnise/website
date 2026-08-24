import { Background } from "@/components/background";
import { Navbar } from "@/components/nav-bar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Background />
      <div className="relative flex h-full flex-col">
        <Navbar />
        <div className="mt-14">{children}</div>
      </div>
    </div>
  );
}
