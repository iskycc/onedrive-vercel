import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../config/site.json'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="OneDrive Vercel Index" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href={`https://fonts.googleapis.com/css2?family=${
              siteConfig.googleFont
            }:wght@${siteConfig.googleFontWeights.join(';')}&display=swap`}
            rel="stylesheet"
          />
          <script>
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?a9e2f0db35e95bf03a813ccfee1bcb26";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        </script>
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
