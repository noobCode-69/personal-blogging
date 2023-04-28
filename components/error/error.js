import Link from "next/link";
import React from "react";
import styled from "./error.module.css";

const Error = ({ message }) => {
  message = message || "An Error Occured.";
  return (
    <div className={styled["error-container"]}>
      <div className={styled['message-container']}>
        <h1>404</h1>
        <p>{message}</p>
      </div>

      <Link href={"/"}>Go to homepage.</Link>
    </div>
  );
};

export default Error;
