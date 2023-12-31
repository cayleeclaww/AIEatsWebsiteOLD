import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Navbar from './components/navigation'
import Navbar from "./components/navigation/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autoimmune Eats',
  description: 'Radical nutrition for autoimmune disease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="{inter.className}">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
