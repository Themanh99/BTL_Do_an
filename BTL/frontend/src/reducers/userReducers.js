import { CAPNHAT_PROFILE_FAIL, CAPNHAT_PROFILE_REQUEST, CAPNHAT_PROFILE_RESET, CAPNHAT_PROFILE_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS ,USER_SIGNOUT} from "../constants/userConstants";


function userSigninReducer(state = {}, action) {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default: return state;
    }
  }
  function userRegisterReducer(state = {}, action) {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  export const userDetailReducer = (state = {loading: true}, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case CAPNHAT_PROFILE_REQUEST:
        return { loading: true };
      case CAPNHAT_PROFILE_SUCCESS:
        return { loading: false, success:true};
      case CAPNHAT_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      case CAPNHAT_PROFILE_RESET:
        return {};
      default: return state;
    }
  }

export {userSigninReducer , userRegisterReducer}