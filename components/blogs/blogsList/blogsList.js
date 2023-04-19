import React from "react";
import styled from "./blogsList.module.css";
import BlogItem from "../blogItem/blogItem";
function BlogsList({ blogs }) {
  return (
    <div className={styled["blogs-list-container"]}>
      
      <div className={styled["blogs"]}>
        {blogs.map((blog) => {
          const { id } = blog;
          return <BlogItem key={id} blog={blog} />;
        })}
      </div>
    </div>
  );
}

export default BlogsList;
