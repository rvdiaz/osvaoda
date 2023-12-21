import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/styles/style.css';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_ADMIN });

const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TOKEN_API_ADMIN}`,
        },
      });
    }

    return forward(operation);
  });


const client = new ApolloClient({
  link: authMiddleware(true).concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

