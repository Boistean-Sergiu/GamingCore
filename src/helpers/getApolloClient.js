
import { ApolloClient } from 'apollo-boost';


const client = new ApolloClient({
    link: 'http://localhost:4000'
});

export const getApolloClient = () => { return client }