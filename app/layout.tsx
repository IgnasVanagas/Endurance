import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Endurance Sports Club - Push Your Limits',
  description: 'Join our community of endurance athletes and discover what you\'re truly capable of',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
