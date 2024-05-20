import '@/styles/globals.css'

export const metadata = {
  title: 'Powerplay',
  description: 'Web3 gaming arena',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
