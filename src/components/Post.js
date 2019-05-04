import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ post }) => (
  <>
    <div className="post">
      <PostHeader post={post} />
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  </>
);
Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
