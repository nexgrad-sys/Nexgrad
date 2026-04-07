"use client"

import "./globals.css"
import Header from "@/app/components/layout/Header"
import Footer from "@/app/components/layout/Footer"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }: any) {
  const pathname = usePathname()

  const isAdmin = pathname.startsWith("/admin")

  return (
    <html lang="en">
      <body>

        {/* ✅ HIDE HEADER */}
        {!isAdmin && <Header />}

        {children}

        {/* ✅ HIDE FOOTER */}
        {!isAdmin && <Footer />}

      </body>
    </html>
  )
}