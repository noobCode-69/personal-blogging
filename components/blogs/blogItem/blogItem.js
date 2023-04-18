import React from "react";
import Link from "next/link";
import styled from "./blogItem.module.css";

function BlogItem({blog}) {
  const { id, title, content, tag } = blog;
    console.log(title);
  return (
    <Link href={""} className={styled["blog-item-container"]}>
      <h3>{title}</h3>
      <p>{content}...</p>
    </Link>
  );
}

export default BlogItem;
