import type { Metadata } from "next";
import Link from "next/link";
import { notoSansJP } from "@/lib/fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

/** A リポ専用: docs サイトのルートレイアウト（サイドナビ・ヘッダー付き）。配布用は layout.sync-template.tsx */
export const metadata: Metadata = {
  title: "デザインシステム",
  description: "このサイトの説明文です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { href: '/principles', label: 'Principles' },
    { href: '/getting-started', label: 'Getting Started' },
    { href: '/foundations', label: 'Foundations' },
    { href: '/components', label: 'Components' },
  ]

  return (
    <html lang="ja">
      <body className={`font-sans ${notoSansJP.variable}`}>
        <div className="flex min-h-screen bg-(--usage-background)">
          <aside className="w-[200] shrink-0 border-r border-(--usage-border) bg-white px-4 py-6">
            <Link
              href="/"
              className="mb-4 block text-xl font-semibold tracking-wide hover:underline"
            >
              デザインシステム
            </Link>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-2 py-1 text-sm font-medium text-(--body-text) hover:bg-(--usage-background)"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="flex-1">{children}</div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
