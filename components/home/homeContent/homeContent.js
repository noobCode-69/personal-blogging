import React from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import styled from "./homeContent.module.css";
import PopularCategories from "../popularCategories/popularCategories";

function HomeContent(props) {
  const blogs = props.blogs.featuredBlogs;
  const categories = props.categories.categories;
  const populars = props.populars.featuredBlogs;
  const isMobileScreen = useMediaQuery({ maxWidth: 650 });

  return (
    <Layout>
      <div className={styled["content"]}>
        <div className={styled["content-left"]}>
          <p className={styled["heading"]}>RECENTLY RELEASED</p>
          <div className={styled["blogs-container"]}>
            {blogs.map((blog) => {
              const { _id, title, description } = blog;
              return (
                <Link key={_id} href={`/blog/${_id}`}>
                  <div className={styled["blog"]}>
                    <h3>{title}</h3>
                    {isMobileScreen ? (
                      <p>{description.split(" ").slice(0, 30).join(" ")}...</p>
                    ) : (
                      <p>{description}</p>
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
                const { _id, title } = popular;
                return (
                  <Link key={_id} href={`/blog/${_id}`}>
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
