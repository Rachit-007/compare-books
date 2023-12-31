import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Header } from "../src/components/header/header";
import client from "../src/graphql/client";
import LoadingBar from "react-top-loading-bar";
import "../styles/globals.css";
import { wrapper } from "../src/store/store";
import { Toaster } from "react-hot-toast";
import PersistComponent from "../src/components/persistComponent/persistComponent";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const ref = useRef(null);

  //This useEffect is responsible for showing the loading bar
  useEffect(() => {
    const start = () => {
      ref.current.continuousStart();
    };
    const end = () => {
      ref.current.complete();
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeError", end);
    router.events.on("routeChangeComplete", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Toaster />
        <LoadingBar
          color="#1E90FF"
          height={4}
          shadow={false}
          ref={ref}
          waitingTime={700}
          containerStyle={{ marginTop: "70px" }}
        />
        <PersistComponent>
          <Component {...pageProps} />
        </PersistComponent>
      </ApolloProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
