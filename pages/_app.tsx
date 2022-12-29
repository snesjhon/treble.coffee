import type { AppProps } from "next/app";
import { ChakraProvider, Grid, Spinner } from "@chakra-ui/react";
import { Router } from "next/router";
import React, { useState } from "react";
import { Navigation } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ChakraProvider>
      {loading ? (
        <>
          <Navigation />
          <Grid placeItems="center" h="80vh">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Grid>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}

export default MyApp;
