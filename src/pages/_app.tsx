// pages/_app.tsx
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/wbhserfmj8jhuim5jxs0yp5iyrukyei8.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <Component {...pageProps} />;
}
