import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className='container'>
      <PostCreate />
      <h3>Posts</h3>
      <PostList />
    </div>
  );
}

export default App;
