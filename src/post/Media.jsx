import React from 'react';
import {compose, setPropTypes, pure} from 'recompose';
import PropTypes from 'prop-types';

import './Media.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  titleUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  children: PropTypes.node
}

function Media(props) {
  const hasImg = Boolean(props.imgUrl);

  return (
    <div className="media">
    <a className={`media__figure${hasImg ? '' : '--no-img'}`}>
      {hasImg && <img
        alt={props.title}
        src={props.imgUrl}
      />}
    </a>
      <div className="media__body">
      <a
        href={props.titleUrl}
        className="media__title"
      >
        {props.title}
      </a>
      {props.children}
      </div>
    </div>
  );
}

export default compose(
  setPropTypes(propTypes),
  pure
)(Media);
