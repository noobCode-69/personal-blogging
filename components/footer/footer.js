import React from "react";
import styled from "./footer.module.css";

function Footer() {
  return (
    <div div className={styled["container"]}>
      <div className={styled["footer"]}>
        <div className={styled["logo"]}>LOGO</div>
        <div className={styled["greeting"]}>
          <p>THANKS FOR READING!</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
