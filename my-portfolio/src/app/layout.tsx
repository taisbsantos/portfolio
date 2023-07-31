import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import symbol from '../assets/img/symbol.png'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tais Porfolio',
  description: 'Profissional presentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href={symbol.src} />

      <body className={inter.className}>{children}</body>
    </html>
  )
}
