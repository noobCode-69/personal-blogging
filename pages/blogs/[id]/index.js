import React from "react";
import Layout from "@/components/layout/layout";
import BlogsList from "@/components/blogs/blogsList/blogsList";
import styled from "../../../styles/Blogs.module.css";

function BlogPage(props) {
  const { blogs, id } = props;
  return (
    <Layout bgColor="#eff1f5">
      <div className={styled["blogs-page-parent"]}>
        <h2>{id}</h2>
        <div className={styled["blogs"]}>
          <BlogsList blogs={blogs} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  let blogs = await fetch(`http://localhost:4000/api/blogs/getAllBlogs/${id}`);
  blogs = await blogs.json();

  return {
    props: {
      blogs: blogs,
      id: id,
    },
  };
}

export default BlogPage;
