import React from 'react';
import { pure } from 'recompose';

function Spinner() {
  return (
    <div className="Spinner">Loading...</div>
  );
}

export default pure(Spinner);
