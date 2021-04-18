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
import OrderHistoryScreen from './Views/homescreen/OrderHistoryScreen';
import ProfileScreen from './Views/homescreen/ProfileScreen';
import ManageProduct from '../src/Views/homescreen/ManageProduct.js';
import AdminRoute from '../../frontend/src/Views/Components/AdminRoute';
import { useSelector } from 'react-redux';
import HeaderAdmin from './Views/Components/HeaderAdmin';
import AddproductsScreen from './Views/products/AddproductsScreen';
import ProductEditScreen from './Views/products/ProductEditScreen';
import Thongke from './Views/homescreen/Thongke';
import OrderListScreen from './Views/homescreen/ManageOrderList';


const { Header, Content ,Footer } = Layout;

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  return (
    <BrowserRouter>
    <Layout className="mainLayout">
       <Header>
        {
          userInfo && userInfo.isAdmin ? (
            <HeaderAdmin></HeaderAdmin>
          ):(
            <Headers />
          )
        }
      </Header>
      <Content>
      {
          userInfo && userInfo.isAdmin ? (
            <AdminRoute path="/thongke" component={Thongke} render></AdminRoute>
          ):(
            <Route path="/" exact={true} component={ HomeScreen } />
          )
        }
      <AdminRoute path="/product/:id/edit"
            component={ProductEditScreen}
            exact
            render>
      </AdminRoute>
        <Route path="/products/"  component={ ProductScreen } />
        <Route path="/signin" component={ SigninScreen } />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route path="/cart/:id?" component={ CartScreen } />
        <Route path="/order/:id" component={ SeeOrder } />
        <Route path="/register" component={ Register } />
        <Route path="/payment" component={ PaymentMethodScreen } />
        <Route path="/placeorder" component={ OrderScreen } />
        <Route path="/checkinfo" component={ ConfirmInfoScreen } />
        <Route path="/orderhistory" component={ OrderHistoryScreen } />
        <Route path="/profile" component={ ProfileScreen } />
        <AdminRoute path="/themsanpham" component={AddproductsScreen} />
        <AdminRoute path="/manageproduct" component={ManageProduct} render></AdminRoute>
        <AdminRoute path="/manageorder" component={OrderListScreen} ></AdminRoute>
      </Content>
      <Footer>
        <Footers />
      </Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
