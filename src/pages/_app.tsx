import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'

/**
 * Self-hosted via next/font. The CSS `@import` this replaces was a
 * render-blocking round-trip to fonts.googleapis.com before any text could
 * paint; next/font inlines the @font-face rules, preloads the woff2 from our
 * own origin, and `display: swap` keeps text visible while it loads.
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!('serviceWorker' in navigator) || process.env.NODE_ENV !== 'production') {
      return
    }

    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // A failed service-worker registration must never break the page.
      })
    }

    window.addEventListener('load', register)
    return () => window.removeEventListener('load', register)
  }, [])

  return (
    <div className={`${inter.variable} font-sans`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
