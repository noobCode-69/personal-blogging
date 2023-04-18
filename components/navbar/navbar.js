import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "./navbar.module.css";
import Layout from "../layout/layout";
import Logo from "../logo/logo";
import links from "./navbar.configs";

function Navbar() {
  const route = useRouter();
  const isHomePage = route.pathname == "/";
  return (
    <Layout bgColor={isHomePage ? "#bfdef2" : "#eff1f5"}>
      <div
        className={`${styled["navbar-container"]} ${
          isHomePage == false ? styled["navbar-home"] : ""
        } `}
      >
        <div className={styled["navbar"]}>
          <div className={styled["logo"]}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <ul className={styled["links"]}>
            {links.map((link) => {
              const { text, url } = link;
              return (
                <li className={styled["link"]} key={text}>
                  <Link href={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Navbar;
