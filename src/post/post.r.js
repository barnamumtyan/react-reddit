import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR} from '../const/actionTypes';

const initialState = {
  isLoading: false,
  didFail: false,
  postList: []
};

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCH_POSTS_REQUEST:
    return {
      ...state,
      isLoading: true
    };

  case FETCH_POSTS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      postList: action.payload.postList
    };

  case FETCH_POSTS_ERROR:
    return {
      ...state,
      isLoading: false,
      didFail: true
    };

  default:
    return state;
  }
};
