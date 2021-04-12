import { createStore , combineReducers, compose, applyMiddleware } from 'redux';
import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productUpdateReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { cartReducers } from './reducers/cartReducers';

import { userDetailReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailReducer, orderHistoryListReducer } from './reducers/orderReducers';


const initialState = { 
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart : {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        ConfirmInfo: localStorage.getItem('ConfirmInfo')
        ? JSON.parse(localStorage.getItem('ConfirmInfo'))
        : {},
        paymentMethod: 'Paypal',
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailReducer,
    orderHistoryList: orderHistoryListReducer,
    userDetails: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
})
// chú ý define ở đây là lúc mình dùng trong các component 
// ví dụ: const {gì gì đó } = orderDetails

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;