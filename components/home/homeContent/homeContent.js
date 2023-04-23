import React from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import styled from "./homeContent.module.css";
import PopularCategories from "../popularCategories/popularCategories";

function HomeContent(props) {
  const { blogs, populars, categories } = props;
  const isMobileScreen = useMediaQuery({ maxWidth: 650 });
  return (
    <Layout>
      <div className={styled["content"]}>
        <div className={styled["content-left"]}>
          <p className={styled["heading"]}>RECENTLY RELEASED</p>
          <div className={styled["blogs-container"]}>
            {blogs.map((blog) => {
              const { id, title, content } = blog;
              return (
                <Link key={id} href={"/"}>
                  <div className={styled["blog"]}>
                    <h3>{title}</h3>
                    {isMobileScreen ? (
                      <p>{content.split(" ").slice(0, 30).join(" ")}...</p>
                    ) : (
                      <p>{content}</p>
                    )}
                    <h4>Read more.</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styled["content-right"]}>
          <div className={styled["top"]}>
            <PopularCategories categories={categories} />
          </div>
          <div className={styled["bottom"]}>
            <p className={styled["heading"]}>POPULAR CONTENT</p>
            <ul className={styled["populars"]}>
              {populars.map((popular) => {
                const { id, title } = popular;
                return (
                  <Link key={id} href={""}>
                    <li className={styled["popular"]}>
                      <h4>{title}</h4>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomeContent;
