import AppBar from '@/components/AppBar'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toca',
  description: 'Toca App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppBar /> 
          {children}
        </Providers>
      </body>
    </html>
  )
}
