import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

const GRAPHQL_END_POINT = process.env.NEXT_APP_GRAPHQL_END_POINT;

export const client = new ApolloClient({
  uri: GRAPHQL_END_POINT,
  cache: new InMemoryCache(),
});

const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default StrapiApolloProvider;
