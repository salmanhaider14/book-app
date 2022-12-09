import { StateContext } from "../components/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;
