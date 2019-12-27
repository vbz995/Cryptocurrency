import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import CryptoReducer from './store/reducers/crypto'
import CurrencyReducer from './store/reducers/currency'
import thunkMiddleware from 'redux-thunk'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CryptoCurrencyList from './components/CryptoCurrencyList'
import CryptoCurrencyDetails from './components/CryptoCurrencyDetails';
import Settings from './components/Settings';
import PaginationReducer from './store/reducers/pagination';


const rootReducer = combineReducers({
    crypto: CryptoReducer,
    currency: CurrencyReducer,
    pagination:PaginationReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
    )
ReactDOM.render(<Provider store = {store}>
    <Router basename={process.env.PUBLIC_URL}>
    <App/>
    <Switch>
        <Route exact path="/" component={CryptoCurrencyList}></Route>
        <Route path="/details" component={CryptoCurrencyDetails}></Route>
        <Route path="/settings" component={Settings}></Route>      
    </Switch>
          
    </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
