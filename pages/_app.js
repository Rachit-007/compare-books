import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Header } from "../src/components/header/header";
import client from "../src/graphql/client";
import LoadingBar from "react-top-loading-bar";
import "../styles/globals.css";
import { persistedStore, wrapper } from "../src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const start = () => {
      console.log("start");
      ref.current.continuousStart();
    };
    const end = () => {
      console.log("finished");
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
        <PersistGate loading={null} persistor={persistedStore}>
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
          <Component {...pageProps} />
        </PersistGate>
      </ApolloProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
