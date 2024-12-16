import { Noto_Sans } from 'next/dist/compiled/@next/font/dist/google'
import '../global.css'

const NotoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic', 'greek', 'devanagari'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-noto-sans',
})

export const metadata = {
  title: 'Welcome to hash-rate-game',
  description: 'Generated by create-nx-workspace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${NotoSans.variable} bg-black text-white w-screen min-h-screen`}>
        {children}
      </body>
    </html>
  )
}