import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

import type { Metadata } from "next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SID | Edits Made Easy",
  description: "Transform your videos whit retention based editing",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          "scroll-smooth bg-[#121212] text-white antialiased"
        )}
      >
        {children}
      </body>
    </html>
  )
}
