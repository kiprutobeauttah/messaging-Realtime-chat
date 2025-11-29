import './globals.css'

export const metadata = {
  title: 'Nimbus — Instant Connect',
  description: 'Real-time messaging, communities, and encrypted chats — all in one beautiful app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
