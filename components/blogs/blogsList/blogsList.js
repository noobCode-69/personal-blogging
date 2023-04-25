import React from "react";
import styled from "./blogsList.module.css";
import BlogItem from "../blogItem/blogItem";
function BlogsList({ blogs }) {
  const allBlogs = blogs.blogs;
  return (
    <div className={styled["blogs-list-container"]}>
      <div className={styled["blogs"]}>
        {allBlogs.map((blog) => {
          const { _id } = blog;
          return <BlogItem key={_id} blog={blog} />;
        })}
      </div>
    </div>
  );
}

export default BlogsList;
