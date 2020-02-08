import React from 'react';
import PropTypes from 'prop-types';

function Comment({ data }) {
  const { author, content } = data;

  return (
    <div className="comment">
      <img className="avatar" src={author.avatar} />
      <p>
        <span>{author.name}</span>
        {content}
      </p>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired
}

export default Comment;
