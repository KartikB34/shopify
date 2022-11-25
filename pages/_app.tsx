import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Header from "../components/Header/Header"
import "../components/Header/header.scss"
import Footer from "../components/Footer/Footer"

export default function App({ Component, pageProps }: AppProps) {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  // return <Component {...pageProps} />
  return <div>
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <Component {...pageProps} sidebarOpen={sidebarOpen} />
    <Footer />
  </div>
}
