import React from "react";
import styled from "./footer.module.css";
import Logo from "@/components/logo/logo";
function Footer() {
  return (
    <div div className={styled["container"]}>
      <div className={styled["footer"]}>
        <div className={styled["logo"]}>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Footer;
