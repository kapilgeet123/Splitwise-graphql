import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql'
  });

ReactDOM.render( <ApolloProvider client={client}><BrowserRouter><App /></BrowserRouter>  </ApolloProvider>, document.getElementById('root'));