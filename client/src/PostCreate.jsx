import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostCreate() {
  const [title, setTitle] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/posts', {
        title,
      });
      setTitle('');
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {}, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostCreate;
