import {
  ApolloClient,
  DocumentNode,
  InMemoryCache,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery as apolloUseQuery,
} from "@apollo/client";

const uri =
  typeof window === "undefined"
    ? process.env.GRAPH_CMS_URL
    : process.env.NEXT_PUBLIC_GRAPH_CMS_URL;

export const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri,
  cache: new InMemoryCache(),
});

export function useQuery(
  query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
  options?: QueryHookOptions<any, OperationVariables> | undefined
) {
  return apolloUseQuery(query, {
    ...options,
    ssr: typeof window === "undefined",
  });
}
