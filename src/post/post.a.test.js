import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from '../const/actionTypes';

import { fetchPosts } from './post.a';

global.fetch = require('jest-fetch-mock');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetching posts', () => {
  afterEach(() => {
    fetch.resetMocks()
  });

  const subreddit = 'all';
  const postList = [{data: {title: 'I\'m a reddit post'}}];
  const response = {data: {children: postList}};

  it ('dispatches FETCH_POSTS_SUCCESS with the right subreddit string when fetchPosts succeeds', () => {
    fetch.mockResponseOnce(JSON.stringify(response));

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
});
