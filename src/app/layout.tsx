import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { constructMetadata } from "@/lib/utility/construct-metadata";
import { cn } from "@/lib/utils";
import { inter, satoshi } from "@/styles/font";
import GTagScript from "@/components/gtag-script";
import Providers from "./(landing)/providers";

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <GTagScript />
      <body
        className={cn(
          "h-screen font-sans antialiased dark:bg-background",
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
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
