import * as React from 'react'
import { 
  ChakraProvider,
  CSSReset,
} from '@chakra-ui/core'
import Head from 'next/head'

import Layout from '../container/layout'
import theme from '../theme/theme'

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      </Head>

      <ChakraProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App