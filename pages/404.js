import Link from "next/link";
import React from "react";
import styled from "../styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styled["container"]}>
      <div className={styled["message-container"]}>
        <h1>Page not found!</h1>
      </div>
      <Link href={"/"}>Go to homepage.</Link>
    </div>
  );
};

export default NotFound;
