import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Media.css';

export default class Media extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    titleUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const hasImg = Boolean(this.props.imgUrl);
    return (
      <div className="media">
      <a className={`media__figure${hasImg ? '' : '--no-img'}`}>
        {hasImg && <img
          alt={this.props.title}
          src={this.props.imgUrl}
        />}
      </a>
        <div className="media__body">
        <a
          href={this.props.titleUrl}
          className="media__title"
        >
          {this.props.title}
        </a>
        {this.props.children}
        </div>
      </div>
    );
  }
};
