import { Background } from "@/components/background";
import { ReactNode } from "react";
import Providers from "./providers";

export const runtime = "edge";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <Background />
      <div className="Layout relative z-10 flex h-screen w-screen justify-center">
        {children}
      </div>
    </Providers>
  );
}
