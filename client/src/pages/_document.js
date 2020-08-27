import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          {/* TODO: Complete google site verification */}
          <meta content="" name="google-site-verification" />

          <script async src="https://stats.fitzpatrick.io/fitzpatrickiotrack.js"
            data-ackee-server="https://stats.fitzpatrick.io"
            data-ackee-domain-id="c3e561e2-4031-4b67-810f-8b0071afec38"
            data-ackee-opts='{ "ignoreLocalhost": true, "detailed": true }'></script>
            {/* data-ackee-opts="{ 'ignoreLocalhost': true, 'detailed': true }"></script> */}
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument