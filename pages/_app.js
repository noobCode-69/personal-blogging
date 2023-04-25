import "../styles/globals.css";
import Navbar from "@/components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
      <div className="my-app">
        <Navbar />
        <Component {...pageProps} />
      </div>
    
  );
}

export default MyApp;
