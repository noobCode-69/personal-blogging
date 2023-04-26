import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import styled from "../../styles/Blogs.module.css";
import BlogsList from "@/components/blogs/blogsList/blogsList";

function Blogs(props) {
  const { blogs, error } = props;
  if (error) {
    return <h1>!!ERROR!!</h1>;
  }
  return (
    <>
      <Head>
        <title>Blogs - All Blogs</title>
      </Head>
      <Layout bgColor="#eff1f5">
        <div className={styled["blogs-page-parent"]}>
          <h2>All Blogs</h2>
          <div className={styled["blogs"]}>
            <BlogsList blogs={blogs} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    let blogs = await fetch("http://localhost:4000/api/blogs/getAllBlogs");
    blogs = await blogs.json();
    return {
      props: {
        blogs: blogs,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error,
      },
    };
  }
}

export default Blogs;
