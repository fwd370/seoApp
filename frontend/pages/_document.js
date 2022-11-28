import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  /*
	ONLY NEEDED IF YOU WANT TO SERVER-RENDER YOUR PAGES.
	*/
  //   static async getInitialProps(ctx) {
  //     const originalRenderPage = ctx.renderPage;

  //     // Run the React rendering logic synchronously
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         // Useful for wrapping the whole react tree
  //         enhanceApp: (App) => App,
  //         // Useful for wrapping in a per-page basis
  //         enhanceComponent: (Component) => Component,
  //       });

  //     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  //     const initialProps = await Document.getInitialProps(ctx);

  //     return initialProps;
  //   }

  render() {
    return (
      <Html lang="en">
        <Head />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
