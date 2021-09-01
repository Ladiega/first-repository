import Document, { Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@400;700&display=swap" 
            rel="stylesheet"      
          />
          <link rel="icon" href="../icon.png"/>
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
          <style>{`
          *{
            padding:0;
            margin:0;
          }
      
      `}

      </style>
      </Html>
    
    )
  }
}

export default MyDocument