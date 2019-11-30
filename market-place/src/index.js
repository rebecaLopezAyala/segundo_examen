import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers"

const history = createBrowserHistory();
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);
ReactDOM.render(
    <Provider store={ store }>
    <Router history={ history }>
      <Routes />
    </Router>
    </Provider>, document.getElementById('root')
    );
    

serviceWorker.unregister();
