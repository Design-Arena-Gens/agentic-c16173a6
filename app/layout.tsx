import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elite Estate Advisors | Premium Farmhouse & Land Specialist',
  description: 'Your trusted partner in luxury farmhouse properties and land acquisition. Experience integrity, expertise, and personalized service in finding your dream estate.',
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
