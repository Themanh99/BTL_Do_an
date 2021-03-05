import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts } from '../../actions/productAction';


function ProductDetails(props) {

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(detailProducts(props.match.params.id));
        return () => {
            
        }; 
    }, [])

    return (
        <div>
            <div className="back-to-result">
                <Link to="/products" >Back to result</Link>
            </div>
            { loading ? <div>Wait a minute. Website is downloading data...</div> :
                error ? <div>{error}</div> :
                    (
                        <div className="details">
                            <div className="details-image">
                                <img src={product.image} alt="product" ></img>
                            </div>
                            <div className="details-info">
                                <ul>
                                    <li>
                                        <h4>{product.name}</h4>
                                    </li>
                                    <li>
                                        {product.rating} Stars {product.review} Reviews
                        </li>
                                    <li>
                                        Price: <b> $ {product.price} </b>
                                    </li>
                                    <li>
                                        Description :
                            {product.description}
                                    </li>
                                </ul>
                            </div>
                            <div className="details-action">
                                <ul>
                                    <li>
                                        Price : {product.price}
                                    </li>
                                    <li>
                                        Status : {product.status}
                                    </li>
                                    <li>
                                        So luong : <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </li>
                                    <li>
                                        <button className="button">Add to cart</button>
                                    </li>
                                </ul>
                            </div>
                            <h1>{product.name}</h1>
                        </div>
                    )
            }
        </div>
    );
}

export default ProductDetails;