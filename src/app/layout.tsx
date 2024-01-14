import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'
import { Providers } from './providers'
import { Account } from '@/components/Account'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlockChain App',
  description: 'A blockchain app built with Next.js and Wagmi',
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Account/>
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
