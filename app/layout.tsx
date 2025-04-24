import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import localFont from "next/font/local"

const glancyr = localFont({
  src: [
    {
      path: "../public/fonts/Glancyr-Thin.otf",
      weight: "100",
    },
    {
      path: "../public/fonts/Glancyr-ExtraLight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/Glancyr-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Glancyr-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Glancyr-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Glancyr-Bold.otf",
      weight: "700",
    },
  ]
})

export const metadata: Metadata = {
  title: "TSA | TExtil",
  description: "",
  icons: {
    icon: {
      url: "/image/favicon.png",
      href: "/image/favicon.png"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={glancyr.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
