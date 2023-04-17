import React from "react";
import Link from "next/link";
import styled from "./navbar.module.css";
import Layout from "../layout/layout";
import Logo from "../logo/logo";
const links = [
  {
    text: "All Posts",
    url: "/posts",
  },
  {
    text: "About me",
    url: "/about",
  },
];

// make a url resolve if url is home => bfColor = "#bfdef2" and padding is "2rem 0"
// other bgColor : null and padding : "1rem 0"
// if this is a 404 page do not show navbar

function Navbar() {
  return (
    <Layout bgColor="#bfdef2">
      <div className={styled["navbar-container"]}>
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
