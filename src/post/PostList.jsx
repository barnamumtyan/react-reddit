import React from 'react';
import {compose, setPropTypes, pure, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './Post';
import * as postActionCreators from './post.a';
import { withNonIdealState } from '../common/non-ideal-state';

const propTypes = {
  postList: PropTypes.array,
  isLoading: PropTypes.bool,
  didFail: PropTypes.bool
};

function PostList(props) {
  return (
    <div>
      {props.postList.map(post => (<Post post={post} key={post.data.id}/>))}
    </div>
  );
}

const withFetchPosts = lifecycle({
  componentDidMount() {
    this.props.fetchPosts('all');
  }
})

const mapStateToProps = (state) => ({
  postList: state.post.postList,
  isLoading: state.post.isLoading,
  didFail: state.post.didFail
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  postActionCreators,
  dispatch
);

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps, mapDispatchToProps),
  withFetchPosts,
  withNonIdealState,
  pure,
)(PostList);