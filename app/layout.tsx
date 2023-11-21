import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baltasar',
  description: 'Conseil en affaires publiques et communication stratégique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <meta name='description' content='Conseil en affaires publiques et communication stratégique' />
      <meta property="og:title" content="Baltasar" key="title" />
      <meta property="og:description" content="Conseil en affaires publiques et communication stratégique" key="title" />
      <meta property="og:url" content="www.baltasar.paris" key="title" />
      <meta name='og:image' content='https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/png/fond+paris+gris+format+M.jpg' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
