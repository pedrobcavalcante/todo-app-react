import '../styles/global.scss';
import { useEffect } from 'react';
import ENV from '../src/config/env';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      '--bg-light-image',
      `url(${ENV.BASE_PATH}/images/bg-desktop-light.jpg)`
    );
    root.style.setProperty(
      '--bg-dark-image',
      `url(${ENV.BASE_PATH}/images/bg-desktop-dark.jpg)`
    );
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
