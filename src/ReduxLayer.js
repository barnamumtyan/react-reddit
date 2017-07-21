import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default class ReduxLayer extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
};

