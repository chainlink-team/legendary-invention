import '@/styles/globals.css'
import Providers from './providers'
import { headers } from "next/headers"

export const metadata = {
  title: 'Powerplay',
  description: 'Web3 gaming arena',
}

export default function RootLayout({ children }) {

  const cookie = headers().get("cookie");

  return (
    <html lang="en">
      <body><Providers cookie={cookie}>{children}</Providers></body>
    </html>
  )
}
