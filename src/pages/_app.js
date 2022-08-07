import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {`{% load static %}`}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
