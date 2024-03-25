import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { cn } from "@/lib/utils";
import { inter, satoshi } from "@/styles/font";
import { Background } from "@/components/background";

export const metadata = constructMetadata({});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "h-screen font-sans antialiased",
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
