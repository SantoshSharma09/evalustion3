
import "../styles/globals.css";
import Navbar from "./components/Navbar";


function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      {/* <html lang="en" classNmae={inter.classNmae}> */}
        <Component {...pageProps} />
      {/* </html> */}
    </main>
  );
}

export default MyApp;
