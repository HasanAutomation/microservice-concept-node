import React from 'react';

function CommentsList({ comments }) {
  return (
    <div className='container'>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
