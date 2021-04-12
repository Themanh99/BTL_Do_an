import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../../actions/userActions';
import { CAPNHAT_PROFILE_RESET } from '../../constants/userConstants';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function ProfileScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const {loading , error , user} = userDetails;
    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {success: successUpdate, loading: loadingUpdate , error: errorUpdate} = userUpdateProfile;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!user){
            dispatch({type:CAPNHAT_PROFILE_RESET});
            dispatch(detailsUser(userInfo._id));
        }else{
            setName(user.name);
            setEmail(user.email);
        }
        
    }, [dispatch, userInfo._id, user]);
    const submitHandler =(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Mật khẩu và Xác nhận mật khẩu không khớp! ');
          } else {
            dispatch(
              updateUserProfile({
                userId: user._id,
                name,
                email,
                password,
              })
            );
          }
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Thông tin tài khoản</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Cập nhật thông tin thành công
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Họ tên</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Địa chỉ Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Mật Khẩu</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Cập nhật
              </button>
            </div>
          </>
        )}
      </form>
        </div>
    );
}

export default ProfileScreen;