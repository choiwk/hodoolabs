import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
        <Head >
          <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"/> 
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
          
        </Head>
        <body>
          <script>
            AOS.init();
          </script>
			<Main />
      <NextScript />
			</body>
			</Html>
		)
	}
}

export default MyDocument;