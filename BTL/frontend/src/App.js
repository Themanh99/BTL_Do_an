import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route,  BrowserRouter } from 'react-router-dom';
import HomeScreen from './Views/homescreen/HomeScreen';
import ProductScreen from './Views/homescreen/ProductScreen';
import ProductDetails from './Views/products/ProductDetails';
import Headers from './Views/Headers/Headers';
import { Layout } from 'antd';
import Footers from './Views/Footers/Footers';
import CartScreen from './Views/Carts/CartScreen';
import SigninScreen from './Views/Signin/SigninScreen';
import Register from './Views/Register/Register';
import ConfirmInfoScreen from './Views/Carts/ConfirmInfoScreen';
import PaymentMethodScreen from './Views/Carts/PaymentMethodScreen';
import OrderScreen from './Views/Carts/OrderScreen';
import SeeOrder from './Views/Carts/SeeOrder';


const { Header, Content ,Footer } = Layout;

function App() {

  
  return (
    <BrowserRouter>
    <Layout className="mainLayout">
       <Header>
          <Headers />
      </Header>
      <Content>
        <Route path="/products/"  component={ ProductScreen } />
        <Route path="/signin" component={ SigninScreen } />
        <Route path="/" exact={true} component={ HomeScreen } />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route path="/cart/:id?" component={ CartScreen } />
        <Route path="/order/:id" component={ SeeOrder } />
        <Route path="/register" component={ Register } />
        <Route path="/payment" component={ PaymentMethodScreen } />
        <Route path="/placeorder" component={ OrderScreen } />
        <Route path="/checkinfo" component={ ConfirmInfoScreen } />
      </Content>
      <Footer>
        <Footers />
      </Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
