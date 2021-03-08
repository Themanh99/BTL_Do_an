import { createStore , combineReducers, compose, applyMiddleware } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { cartReducers } from './reducers/cartReducers';
import Cookie from 'js-cookie';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart : {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState, compose(applyMiddleware(thunk)));
export default store;