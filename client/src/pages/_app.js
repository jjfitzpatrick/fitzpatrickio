import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import Head from 'next/head'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
