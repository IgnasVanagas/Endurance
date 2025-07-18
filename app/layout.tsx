import './globals.css'
import { Jost } from 'next/font/google'
import { LanguageProvider } from '../context/LanguageContext'

const jost = Jost({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const metadata = {
  title: 'Faster Endurance Studio - Push Your Limits',
  description: 'Join our community of endurance athletes and discover what you\'re truly capable of',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`prod ${jost.className}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
