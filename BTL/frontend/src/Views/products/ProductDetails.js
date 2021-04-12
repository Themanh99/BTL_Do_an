import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts } from '../../actions/productAction';
import { Row, Col, Radio, Button, Rate, Tabs, Image } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';


function ProductDetails(props) {
    const [slmua, setSoluong] = useState(1);
    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });
    const { TabPane } = Tabs;
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailProducts(productId));
        
    }, [dispatch, productId]);

    const Addtocart = () => {
        props.history.push("/cart/" + productId + "?slmua=" +slmua)
    }

    function onChange(e) {
        console.log(`radio checked:${e.target.value}`);
    }
    return (
        <div>
            <div className="back-to-result">
                <button type="primary"><span><Link to="/products" >Trở về</Link></span></button>
            </div>
            { loading ? <div>Xin đợi một chút! Trang web đang lấy dữ liệu...</div> :
                error ? <div>{error}</div> :
                    (
                        <div>
                            <Col span={2}></Col>
                            <Col span={20}>
                                <Row span={6}></Row>
                                <Row span={18}>
                                    <h1>Thông tin chi tiết</h1>
                                </Row>
                            </Col>
                            <Col span={2}></Col>
                            <Row>
                                <Col span={1}></Col>
                                <Col span={9}>
                                    <div className="details-image">
                                        <Image
                                            width={500}
                                            src={product.image} />
                                    </div>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={10}>
                                    <div className="details-info">
                                        <ul>
                                            <li>
                                                <h2>{product.name}</h2>
                                            </li>
                                            <li>
                                                <h4>{product.category}</h4>
                                            </li>
                                            <li>
                                                {product.rating} Stars
                                                <Rate value={product.rating} />
                                                {product.review} Reviews
                                            </li>
                                            <li>
                                                Giá: <b> $ {product.price} </b>
                                            </li>
                                            <li>
                                                Mô tả :
                            {product.description}
                                            </li>
                                            <li>
                                                <br />
                                                <b>Color : </b> {product.mau}
                                            </li>
                                            <li>
                                                <br />
                                                <b>Kiểu dáng : </b> {product.kieudang}
                                            </li>
                                            <li>
                                                <br />
                                                <b>Nhãn hiệu : </b> {product.brand}
                                            </li>
                                            <li>
                                                <br />
                                                <b>Trạng thái : </b> {product.soluongco > 0 ? "Còn hàng" : "Hết hàng"}
                                            </li>
                                        </ul>
                                    </div>
                                    <br />
                                    <Row>
                                        <Col span={9}>Số lượng</Col>
                                        <Col span={9}>Cỡ giày</Col>
                                    </Row>
                                    <Row>
                                        <Col span={9}>
                                                <select value={slmua} onChange={(e) => { setSoluong(e.target.value) }}>
                                                    {[...Array(product.soluongco).keys()].map(x=>
                                                        <option key={ x+1 } value={x+1}>{x+1}</option>
                                                    )}
                                                </select>
                                        </Col>
                                        <Col span={10}>
                                            {/* thay doi gia tri cho radio va gom nhóm chúng  */}
                                            <Radio.Group defaultValue="37" onChange={onChange}>
                                                <Radio.Button value="37">37</Radio.Button>
                                                <Radio.Button value="38">38</Radio.Button>
                                                <Radio.Button value="39">39</Radio.Button>
                                                <Radio.Button value="40">40</Radio.Button>
                                            </Radio.Group>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                    {product.soluongco > 0 &&
                                        <Button type="primary" onClick={Addtocart}>
                                            <IconFont type="icon-shoppingcart" />
                                            Thêm vào giỏ
                                        </Button>
                                    }
                                    </Row>
                                </Col>
                                <Col span={3}></Col>
                            </Row>
                            <Row>
                                <Tabs defaultActiveKey="2">
                                    <TabPane
                                        tab={
                                            <span>
                                                {/* icon */}
                                                Mô tả
                                            </span>
                                        }
                                        key="1"
                                    >
                                        {product.description}
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>

                                                Đánh giá
                                            </span>
                                        }
                                        key="2"
                                    >
                                        {product.rating}<br />
                                        <Rate value={product.rating} />
                                        {product.review} Reviews
                                    </TabPane>
                                </Tabs>,
                            </Row>
                        </div>
                    )
            }
        </div>
    );
}

export default ProductDetails;