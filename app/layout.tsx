import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import React from 'react'

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
  title: "TSA | Textil",
  description: "",
  icons: {
    icon: {
      url: "/image/favicon.png",
      href: "/image/favicon.png"
    }
  }
}

const PixelTracker = React.lazy(() => import('../components/PixelTracker'));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={glancyr.className}>
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2502040153502437');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2502040153502437&ev=
            PageView&noscript=1"/>
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
