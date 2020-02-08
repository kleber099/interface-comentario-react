import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function Post({ data }){
  const { author, date, content, comments } = data;

  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={author.avatar} />
        <div className="details">
          <span>{author.name}</span>
          <span>{date}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <div className="post-comments">
        <div className="divider" />
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired
}

export default Post;