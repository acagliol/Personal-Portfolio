import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alejo | CS Portfolio",
  description: "Minimal brutalist portfolio for a CS student.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="font-mono">
      <body className="min-h-screen bg-[#000] text-[#f5f1e8] antialiased">
        {children}
      </body>
    </html>
  )
}