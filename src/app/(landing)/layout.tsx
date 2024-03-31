import { Background } from "@/components/background";
import { ReactNode } from "react";
import Providers from "./providers";
import { Navbar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

export const runtime = "edge";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <Background />
      <div className="relative flex h-full flex-col">
        <Navbar />
        <div className="mt-[56px]">{children}</div>
      </div>
    </Providers>
  );
}
