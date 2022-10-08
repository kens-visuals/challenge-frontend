import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta
          name="description"
          content="Markdown editor built with NextJS and Firebase Firestore. Coded by Kens-Visuals"
        />
        <meta property="og:title" content="Markdown App" />
        <meta name="author" content="Kens-Visuals" />
        <meta
          property="og:url"
          content="https://markdown-notes-app-delta.vercel.app/"
        />
        <meta property="og:image" content="https://mugshotbot.com/m/P34RyMqb" />
        <meta property="twitter:card" content="summary_large_image" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Work+Sans:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
