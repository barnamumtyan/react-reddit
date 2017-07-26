import React from 'react';
import {compose, setPropTypes, pure} from 'recompose';
import PropTypes from 'prop-types';

import Media from './Media';
import {ORIGIN_URL} from '../const/consts.js';

const propTypes = {
  post: PropTypes.object
};

function Post(props) {
  const post = props.post.data;

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

export default compose(
  setPropTypes(propTypes),
  pure
)(Post);
