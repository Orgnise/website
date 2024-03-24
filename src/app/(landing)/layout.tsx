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
      <div className="h-full min-h-screen w-full overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </Providers>
  );
}
