import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * this is configuration of the apollo client it contains two things one is url on which all the requests use and other in cache for caching the data on the request
 */
const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;
