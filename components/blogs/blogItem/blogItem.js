import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import styled from "./blogItem.module.css";

function BlogItem({ blog }) {
  const { _id, title, description } = blog;
  const isMobileScreen = useMediaQuery({ maxWidth: 650 });
  return (
    <Link href={`/blog/${_id}`} className={styled["blog-item-container"]}>
      <h3>{title}</h3>
      {isMobileScreen ? (
        <p> {description.split(" ").slice(0, 40).join(" ")}...</p>
      ) : (
        <p> {description} </p>
      )}
      <h4>Read more.</h4>
    </Link>
  );
}

export default BlogItem;
