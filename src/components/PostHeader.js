import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ post }) => (
  <>
    <div className="post-header">
      <div className="logo">{post.name[0]}</div>
      <div className="info">
        <strong>{post.name}</strong>
        <span>{post.time}</span>
      </div>
    </div>
  </>
);

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostHeader;
