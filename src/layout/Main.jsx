import React from 'react';
import './Main.css';
import PostList from '../post/PostList';

function Main() {
  return (
    <header className="layout__content">
      <PostList />
    </header>
  );
}

export default Main;