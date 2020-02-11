import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { App } from './app';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { history, configureStore } from './app/redux/store';

export const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
             <Route exact path="/" component={App}/>
             <Route path="*" render={() => (<h1>PAGE NOT FOUND</h1>)}/>
           </Switch>
       </ConnectedRouter>
    </Provider> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
