import MyProvider from '../context/MyProvider'

export default function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>

  );
}
