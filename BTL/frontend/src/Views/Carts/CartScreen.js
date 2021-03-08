import { Button, Col, Image,  Row } from 'antd';
import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;
    const slmua = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeItemInCart = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const dathangClick = () => {
        props.history.push("/signin?redirect=shipping");
    }

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, slmua));
        }
    }, [])

    return (
        <div className="cart">
            <ul className="cart-list-container">
                <li>
                    <Row>
                        <Col span={6}>
                        </Col>
                        <Col span={10} xs={2} sm={4} md={6} lg={8} xl={10} >
                            <h1 className="title-cart">GIỎ HÀNG</h1>
                        </Col>
                        <Col span={6}>
                        </Col>
                    </Row>
                </li>
                <li>
                    <Row>
                        <Col span={4}>
                            {/* <h2></h2> */}
                        </Col>
                        <Col span={4}>
                            <h2>Tên sản phẩm</h2>
                        </Col>
                        <Col span={4}>
                            <h2>Trạng thái</h2>
                        </Col>
                        <Col span={4}>
                            <h2>Số lượng</h2>
                        </Col>
                        <Col span={4}>
                            <h2>Giá</h2>
                        </Col>
                        <Col span={4}>
                            {/* <h2></h2> */}
                        </Col>
                    </Row>
                </li>
                <Row>
                    {
                        cartItems.length === 0 ?
                            <div>Giỏ hàng trống ! </div>
                            :
                            cartItems.map(item =>
                                <li>
                                    <div className="item-add-to-cart">
                                        <Row>
                                            <Col span={4}>
                                                <Image src={item.image} height="100px" width="100px"></Image>
                                            </Col>
                                            <Col span={4}>
                                                <Link to={"/product/" + item.product}>
                                                    <h3>{item.name}</h3>
                                                </Link>

                                            </Col>
                                            <Col span={4}>
                                                <h3>{item.trangthai}</h3>
                                            </Col>
                                            <Col span={4}>
                                                    <select value={item.slmua} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                                        {[...Array(item.soluongco).keys()].map(x =>
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        )}
                                                    </select>
                                            </Col>
                                            <Col span={4}>
                                                <h3>{item.price}</h3>
                                            </Col>
                                            <Col span={4}>
                                                <Button type="primary" onClick={() => removeItemInCart(item.product)}>Xóa</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </li>
                            )
                    }
                </Row>
            </ul>
            <div className="cart-action">
                <h3>
                    Tổng tiền ( {cartItems.reduce((a, c) => a + c.slmua, 0)} items)
        :
         $ {cartItems.reduce((a, c) => a + c.price * c.slmua, 0)}
                </h3>
                <Button type="primary" onClick={dathangClick} disabled={cartItems.length === 0}>
                    Đặt hàng
      </Button>
            </div>
        </div>
    );
}

export default CartScreen;