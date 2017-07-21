import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object
  }

  render() {
    return (
      <div>
        {this.props.post.data.title}
      </div>
    );
  }
};
