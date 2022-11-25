import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Header from "../components/Header"
import "../components/header.scss"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }: AppProps) {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  // return <Component {...pageProps} />
  return <div>
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className='min-h-[70vh]'>
      <Component {...pageProps} sidebarOpen={sidebarOpen} />
    </div>
    <Footer />
  </div>
}