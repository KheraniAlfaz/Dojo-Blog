import { useState } from "react";
const BlogList = (props) => {
  return (
    <div className="blog-list">
      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
