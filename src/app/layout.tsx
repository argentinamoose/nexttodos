import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App Next',
  description: 'Todos using next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} font-inter bg-slate-100 text-slate-800 container mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  )
}
