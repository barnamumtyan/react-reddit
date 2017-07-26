import React from 'react';
import './Main.css';
import { PostList } from '../post';

function Main() {
  return (
    <header className="layout__content">
      <PostList />
    </header>
  );
}

export default Main;