import React from 'react';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions/userActions';

function Headers(props) {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const signoutHandler = () => {
        dispatch(signout());
    }
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/profile">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/orderhistory">Lịch sử mua </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <Link to="" onClick={signoutHandler}>
                    Đăng xuất
            </Link>
            </Menu.Item>
        </Menu>
    );
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
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="product">
                        <Link to="/products/">Sản phẩm</Link>
                    </Menu.Item>
                    <Menu.Item key="cart">
                        <Link to="/cart/">Giỏ hàng
                        {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="signins">
                        {
                            userInfo ? (
                                <Dropdown overlay={menu}>
                                    <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
                                </Dropdown>
                            ) : (
                                <Link to="/signin">Đăng nhập</Link>
                            )
                        }
                    </Menu.Item>
                    <Menu.Item key="signup">
                        {
                            userInfo ? (
                                <div></div>
                            ) : (
                                <Link to="/register">Đăng ký</Link>
                            )
                        }
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}

export default Headers;