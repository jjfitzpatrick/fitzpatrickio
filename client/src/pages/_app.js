import * as React from 'react'
import { Grommet } from 'grommet';
import Head from 'next/head'
import Layout from '../container/layout'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      </Head>
      <Grommet>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Grommet>
    </>
  )
}

export default App