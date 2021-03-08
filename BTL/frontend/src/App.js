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


const { Header, Content ,Footer } = Layout;

function App() {

  
  return (
    <BrowserRouter>
    <Layout className="mainLayout">
       <Header>
          <Headers />
      </Header>
      <Content>
        <Route path="/products/"  component={ProductScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route path="/cart/:id?" component={ CartScreen } />
      </Content>
      <Footer>
        <Footers />
      </Footer>
      
    </Layout>
    </BrowserRouter>
  );
}

export default App;
