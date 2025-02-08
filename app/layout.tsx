import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextUIProvider from './NextUIProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🚀 Events',
  description: 'Go to your next event',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark text-foreground bg-background h-screen w-screen`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
