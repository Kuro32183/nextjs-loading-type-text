import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3 * 1000)
  }, [])
  if (isLoading) {
    return <Loading />
  }
  return <Component {...pageProps} />
}

export default MyApp
