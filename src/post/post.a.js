import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from '../const/actionTypes';
import { ORIGIN_URL } from '../const/consts';

function requestPosts(subreddit) {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: {subreddit}
  }
}

function recievePosts(json) {
  // console.log('json', json);
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      postList: json.data.children
    }
  }
}

function recievePostsError(error) {
  // console.log('error', error);
  return {
    type: FETCH_POSTS_ERROR,
    payload: {error},
    error: true
  }
}

export function fetchPosts(subreddit = 'all', feed = 'hot') {
  return dispatch => {
    dispatch(requestPosts(subreddit));

    return fetch(`${ORIGIN_URL}/r/${subreddit}/${feed}.json`)
      .then(
        response => response.json(),
        error => {
          return dispatch(recievePostsError(error))}
      ).then(
        json => {
          return dispatch(recievePosts(json))}
      );
  }
}
