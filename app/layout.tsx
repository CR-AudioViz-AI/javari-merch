import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Merch | Custom Print-on-Demand Products',
  description: 'Create and sell custom merchandise. T-shirts, hoodies, mugs, phone cases & more. No inventory, no risk.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
