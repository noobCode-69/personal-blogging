import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import BlogsList from "@/components/blogs/blogsList/blogsList";
import styled from "../../../styles/Blogs.module.css";

function BlogPage(props) {
  const { blogs, id, error } = props;

  if (error) {
    return <h1>!!ERROR!!</h1>;
  }

  return (
    <>
      <Head>
        <title>Blogs - {id}</title>
      </Head>
      <Layout bgColor="#eff1f5">
        <div className={styled["blogs-page-parent"]}>
          <h2>{id}</h2>
          <div className={styled["blogs"]}>
            <BlogsList blogs={blogs} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    let blogs = await fetch(
      `http://localhost:4000/api/blogs/getAllBlogs/${id}`
    );

    if (!blogs.ok) {
      throw new Error({});
    }
    blogs = await blogs.json();
    return {
      props: {
        blogs: blogs,
        id: id,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: error,
      },
    };
  }
}

export default BlogPage;
