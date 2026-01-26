import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

import { PageHeader } from '@/components/shared/page-header'
import { PageTopButton } from '@/components/shared/page-top-button'
import { Toaster } from '../components/ui/sonner'

export const metadata: Metadata = {
  title: 'サイトタイトル',
  description: '説明文です。',
}

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${notoSansJP.variable}`}>
        <PageHeader />
        <main>{children}</main>
        <PageTopButton />
        <Toaster />
      </body>
    </html>
  )
}
