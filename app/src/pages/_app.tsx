import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import { ColorModeProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
