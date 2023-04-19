import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import styled from "./blogItem.module.css";

function BlogItem({ blog }) {
  const {  title, content } = blog;
  const isMobileScreen = useMediaQuery({ maxWidth: 650 });
  return (
    <Link href={""} className={styled["blog-item-container"]}>
      <h3>{title}</h3>
      {isMobileScreen ? (
        <p> {content.split(" ").slice(0, 40).join(" ")}...</p>
      ) : (
        <p> {content} </p>
      )}
      <h4>Read more.</h4>
    </Link>
  );
}

export default BlogItem;
