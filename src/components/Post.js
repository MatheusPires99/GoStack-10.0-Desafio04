import React from "react";

function PostHeader({ author, content, date }) {
  return (
    <div className="post-header">
      <div className="profile">
        <img src={author.avatar} alt=""/>
        <div className="post-info">
          <strong>{author.name}</strong>
          <small>{date}</small>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
}

function PostComment({ comments }) {
  return (
    <div className="post-comment">
      {comments.map(comment => (
        <div key={comment.id} className="profile" >
          <img src={comment.author.avatar} alt=""/>
          <div className="comment">
            <strong>{comment.author.name}</strong>
            {comment.content}
          </div>
        </div>
      ))}
    </div>
  );
}

function Post({ author, content, date, comments }) {
  return (
    <div className="post-item">
      <PostHeader author={author} content={content} date={date} />
      <PostComment comments={comments} />
    </div>
  );
}

export default Post;
