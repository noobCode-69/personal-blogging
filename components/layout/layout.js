import React from "react";
import styled from "./layout.module.css";

function Layout({ children, bgColor }) {
  return (
    <div
      style={{
        background: !bgColor != null ? bgColor : "",
      }}
    >
      <div className={styled["max-width"]}>{children}</div>
    </div>
  );
}

export default Layout;
