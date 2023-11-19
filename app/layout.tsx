import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baltasar',
  description: 'Alexis et Geoffroy vous sucent pour un snicker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <meta name='description' content='Alexis et Geoffroy vous sucent pour un snicker' />
      <meta property="og:title" content="Baltasar" key="title" />
      <meta property="og:description" content="Alexis et Geoffroy vous sucent pour un snicker" key="title" />
      <meta property="og:url" content="www.baltasar.paris" key="title" />
      <meta name='og:image' content='https://media.istockphoto.com/id/1316810209/fr/vectoriel/carte-de-ville-monochrome-de-paris-france-plan-des-rues-fond-urbain-sch%C3%A9ma-vectoriel-avec.jpg?s=1024x1024&w=is&k=20&c=Gkc676tqcsBmegsspNGn_hg3xpzge4iNFYznHxGfRcE=' />
      {/* <link rel="icon" type="image/x-icon" href="https://matabeille.s3.eu-west-1.amazonaws.com/156625439+(1)/Logo+Files/For+Web/Favicons/iPhone.png" /> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
