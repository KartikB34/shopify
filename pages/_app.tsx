import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Header from "../components/Header"
import "../components/header.scss"
import Footer from "../components/Footer"

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  // return <Component {...pageProps} />
  return <div>
    <Head>
        <title>Shopify - The ultimate app for inventory management</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className='min-h-[70vh]'>
      <Component {...pageProps} sidebarOpen={sidebarOpen} />
    </div>
    <Footer />
  </div>
}