import axios from 'axios';
import React, { useState } from 'react';

function CommentCreate({ postId }) {
  const [content, setContent] = useState('');
  async function handleSubmit(e) {
    try {
      console.log('comm');
      e.preventDefault();
      const { data } = await axios.post(
        `http://localhost:4001/posts/${postId}/comments`,
        {
          content,
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='mt-3'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Comments</label>
          <input
            type='text'
            className='form-control'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Comment
        </button>
      </form>
    </div>
  );
}

export default CommentCreate;
