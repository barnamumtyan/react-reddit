import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from '../const/actionTypes';

import { fetchPosts } from './post.a';

// global.fetch = require('jest-fetch-mock');
global.fetch = jest.fn();

fetch.mockResponseSuccess = (body) => {
  fetch.mockImplementationOnce (
    () => Promise.resolve({json: () => Promise.resolve(JSON.parse(body))})
  );
};

fetch.mockResponseFailure = (error) => {
  fetch.mockImplementationOnce(
    () => Promise.reject(error)
  );
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetching posts', () => {

  const subreddit = 'all';
  const postList = [{data: {title: 'I\'m a reddit post'}}];
  const error = [{code: 500, errorMsg: 'some server error'}];
  const mockError = new Error('Look ma! I am an error.');
  const responseData = {children: postList};

  it ('dispatches FETCH_POSTS_SUCCESS with the right subreddit string when fetchPosts succeeds', () => {
    fetch.mockResponseSuccess(JSON.stringify({
      status: 200,
      statusText: null,
      headers: {
        'Content-type': 'application/json'
      },
      data: responseData
    }));

    const expectedActions = [{
      type: FETCH_POSTS_REQUEST,
      payload: {subreddit: subreddit}
    }, {
      type: FETCH_POSTS_SUCCESS,
      payload: {postList}
    }];
    const store = mockStore({post: {postList: []}});

    return store.dispatch(fetchPosts(subreddit)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it ('dispatched FETCH_POSTS_ERROR when the request fails', () => {
    fetch.mockResponseFailure(mockError);

    const expectedActions = [{
      type: FETCH_POSTS_REQUEST,
      payload: {subreddit: subreddit}
    }, {
      type: FETCH_POSTS_ERROR,
      error: true,
      payload: {error}
    }];
    const store = mockStore({post: {postList: []}});

    return store.dispatch(fetchPosts(subreddit)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
