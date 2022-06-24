import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ssa2zm2gkr01zcf7x6ewep/master',
    cache: new InMemoryCache()
})