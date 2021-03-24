import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/userActions';

function Headers(props) {
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const signoutHandler = () => {
        dispatch(signout());
    }
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
                        <Link to="/cart/">Cart
                        {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                        )}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="signins">
                        {
                            userInfo ? (
                                <div className="dropdown">
                                    <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/profile">User Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/orderhistory">Order History</Link>
                                        </li>
                                        <li>
                                            <Link to="#signout" onClick={signoutHandler}>
                                                Sign Out
                                    </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/signin">Sign in</Link>
                            )
                        }
                    </Menu.Item>
                    <Menu.Item key="signup">
                       { 
                           userInfo ? (
                               <div></div>
                           ):(
                            <Link to="/register">Sign up</Link>
                           )
                       
                       }
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}

export default Headers;