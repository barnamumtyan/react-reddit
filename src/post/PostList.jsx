import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './Post';
import * as postActionCreators from './post.a';

export class PostList extends Component {
  static propTypes = {
    postList: PropTypes.array,
    isPending: PropTypes.bool,
    didFail: PropTypes.bool
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.props.fetchPosts('all');
  }

  render() {
    if (this.props.isPending) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    if (this.props.didFail) {
      return (
        <div>
          Failed...
        </div>
      );
    }
    return (
      <div>
        {this.props.postList.map(post => (<Post post={post} key={post.data.id}/>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postList: state.post.postList,
  isPending: state.post.isPending,
  didFail: state.post.didFail
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  postActionCreators,
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);