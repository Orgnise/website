import { Background } from "@/components/background";
import { ClientOnly } from "@/components/client-only";
import Pattern from "@/components/pattern/pattern";
import { ThemeProvider } from "@/components/theme-provider";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { cn } from "@/lib/utils";
import { inter, satoshi } from "@/styles/font";
import "@/styles/global.css";

export const metadata = constructMetadata({});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen border font-sans antialiased",
          satoshi.variable,
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Background />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
