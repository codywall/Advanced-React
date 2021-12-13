import Page from '../components/Page';

// TODO: swap with my own
import 'nprogress/nprogress.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
