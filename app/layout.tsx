import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cocina Meals - Menu',
  description: 'Delicious Filipino Meals - Calzada Tipas, Taguig',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
