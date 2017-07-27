import React from 'react';
import { pure } from 'recompose';

function FailedMessage() {
  return (
    <div className="FailedMessage">Request Failed</div>
  );
}

export default pure(FailedMessage);
