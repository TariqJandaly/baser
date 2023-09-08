import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baser',
  description: 'Convert form Base 10 to any base up to 64!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://fav.farm/🔥" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
