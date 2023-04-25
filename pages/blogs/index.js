import Layout from "@/components/layout/layout";
import React from "react";
import styled from "../../styles/Blogs.module.css";
import BlogsList from "@/components/blogs/blogsList/blogsList";

function Blogs(props) {
  const { blogs } = props;
  return (
    <Layout bgColor="#eff1f5">
      <div className={styled["blogs-page-parent"]}>
        <h2>All Blogs</h2>
        <div className={styled["blogs"]}>
          <BlogsList blogs={blogs} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  let blogs = await fetch("http://localhost:4000/api/blogs/getAllBlogs");
  blogs = await blogs.json();
  return {
    props: {
      blogs: blogs,
    },
  };
}

export default Blogs;
