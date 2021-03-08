import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function Headers(props) {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                <Link to="/">
                    <i class="fas fa-shoe-prints"></i>
                    <a href="#facebook">Anh Cherry</a>
                    </Link>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="product">
                        <Link to="/products/">Product</Link>
                    </Menu.Item>
                    <Menu.Item key="cart">
                    <Link to="/cart/">Cart</Link>
                    </Menu.Item>
                    <Menu.Item key="signin">Sign in</Menu.Item>
                    <Menu.Item key="signup">Sign up</Menu.Item>
                </Menu>
            </div>
        </div>
    );
}

export default Headers;