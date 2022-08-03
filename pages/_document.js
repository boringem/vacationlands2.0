import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="../dist/globals.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@400;500&family=Source+Serif+Pro:wght@400;600&family=Yellowtail&display=swap" 
                    rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}