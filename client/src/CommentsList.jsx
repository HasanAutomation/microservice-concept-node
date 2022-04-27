import React from 'react';

function CommentsList({ comments }) {
  return (
    <div className='container'>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.status === 'pending'
              ? 'Comment awaiting moderation'
              : comment.status === 'approved'
              ? comment.content
              : 'Comment Rejected'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
