import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Media from './Media';
import {ORIGIN_URL} from '../const/consts.js';

export default class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object
  }

  render() {
    const post = this.props.post.data;
    return (
      <Media
        title={post.title}
        titleUrl={post.url}
        imgUrl={post.thumbnail.includes('http') ? post.thumbnail : null}
      >
        <a href={`${ORIGIN_URL}${post.permalink}`}>
          {post.num_comments} comments
        </a>
      </Media>
    );
  }
};
