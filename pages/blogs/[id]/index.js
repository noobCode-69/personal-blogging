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

export function getServerSideProps(context) {
  const { id } = context.query;
  const blogs = [
    {
      id: 1,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
      tag: "React",
    },
    {
      id: 2,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
      tag: "React",
    },
    {
      id: 3,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
      tag: "React",
    },
    {
      id: 4,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
      tag: "Next",
    },
    {
      id: 5,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration",
      tag: "Next",
    },
    {
      id: 6,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
      tag: "Javascript",
    },
    {
      id: 7,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration",
      tag: "Javascript",
    },
  ];

  return {
    props: {
      blogs: blogs,
      id: 'React',
    },
  };
}

export default BlogPage;
