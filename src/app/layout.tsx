import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Provider";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ApolloProvider } from "@/lib/apollo/provider";
import { Header } from "@/components/features/layouts/header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap", // Prevent layout shift during font load
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Live Streaming",
    template: "%s | Live Streaming",
  },
  description: "Professional live streaming platform",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning // Needed if using a theme provider
    >
      <body className="min-h-full flex flex-col">
        <ApolloProvider>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <Header />
                  <main className="flex flex-1 flex-col">{children}</main>
                </SidebarInset>
              </SidebarProvider>

            </ThemeProvider>
          </Providers>
        </ApolloProvider>
      </body>
    </html>
  );
}


