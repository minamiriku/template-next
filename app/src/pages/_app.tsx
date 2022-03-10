import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
