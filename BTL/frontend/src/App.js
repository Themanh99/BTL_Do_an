import React from 'react';
import './App.css';
import { Route,  BrowserRouter } from 'react-router-dom';
import HomeScreen from './Views/homescreen/HomeScreen';
import ProductScreen from './Views/homescreen/ProductScreen';
import ProductDetails from './Views/products/ProductDetails';
import Headers from './Views/Headers/Headers';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Headers />
        <main className="main">
          <div className="content">
            <Route path="/products/"  component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" component={ ProductDetails } />
          </div>

        </main>
        <footer className="footer">
          All right reserved by THE MANH.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
