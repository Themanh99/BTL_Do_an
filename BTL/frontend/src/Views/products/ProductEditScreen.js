import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailProducts, updateProduct } from '../../actions/productAction';
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

export default function ProductEditScreen(props) {
    const productId = props.match.params.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [soluongco, setSoluongco] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [kieudang, setKieudang] = useState('');
    const [dongsanpham, setDongsanpham] = useState('');
    const [mau, setMau] = useState('');
    const [isActive, setIsactive] = useState('');

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const productUpdate = useSelector((state) => state.productUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate;
    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate) {
            props.history.push('/manageproduct');
          }
        if (!product || product._id !== productId || successUpdate) {
            dispatch({type: PRODUCT_UPDATE_RESET});
            dispatch(detailProducts(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setCategory(product.category);
            setSoluongco(product.soluongco);
            setBrand(product.brand);
            setDescription(product.description);
            setKieudang(product.kieudang);
            setDongsanpham(product.dongsanpham);
            setMau(product.mau);
            setIsactive(product.isActive);
        }
    }, [product, dispatch, productId, successUpdate, props.history]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            category,
            soluongco,
            brand,
            description,
            kieudang,
            dongsanpham,
            mau,
            isActive
        }));
        window.alert('Cập nhật thông tin thành công!')
    };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sửa sản phẩm {productId}</h1>
                </div>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        <div>
                            <label htmlFor="name">Tên giày</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="price">Giá</label>
                            <input
                                id="price"
                                type="text"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="image">Ảnh</label>
                            <input
                                id="image"
                                type="text"
                                placeholder="Enter image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></input>
                            
                        </div>
                        <div>
                                <label htmlFor="imageFile">Image File</label>
                                    <input
                                        type="file"
                                        id="imageFile"
                                        label="Choose Image"
                                        onChange={uploadFileHandler}
                                    ></input>
                                    {loadingUpload && <LoadingBox></LoadingBox>}
                                    {errorUpload && (
                                        <MessageBox variant="danger">{errorUpload}</MessageBox>
                                    )}
                                </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input
                                id="category"
                                type="text"
                                placeholder="Enter category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="brand">Nhãn hiệu</label>
                            <input
                                id="brand"
                                type="text"
                                placeholder="Enter brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="soluongco">Số lượng có</label>
                            <input
                                id="soluongco"
                                type="text"
                                placeholder="Enter soluongco"
                                value={soluongco}
                                onChange={(e) => setSoluongco(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="description">Mô tả</label>
                            <textarea
                                id="description"
                                rows="3"
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="kieudang">Kiểu dáng</label>
                            <textarea
                                id="kieudang"
                                type="text"
                                placeholder="Enter kieudang"
                                value={kieudang}
                                onChange={(e) => setKieudang(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="dongsanpham">Dòng sản phẩm</label>
                            <textarea
                                id="dongsanpham"
                                rows="2"
                                type="text"
                                placeholder="Enter dongsanpham"
                                value={dongsanpham}
                                onChange={(e) => setDongsanpham(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="mau">Màu sắc</label>
                            <textarea
                                id="mau"
                                type="text"
                                placeholder="Enter mau"
                                value={mau}
                                onChange={(e) => setMau(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="radioActive">
                            <label htmlFor="isActive">Trạng thái hiển thị</label>
                            <select value={isActive} onChange={(e) => setIsactive(e.target.value)}>
                                <option value="true">Active</option>
                                <option value="false">No Active</option>
                            </select>
                        </div>
                        <div>
                            <label></label>
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}