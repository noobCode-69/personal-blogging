import Layout from "@/components/layout/layout";
import React from "react";
import styled from "../../styles/Blogs.module.css";
import BlogsList from "@/components/blogs/blogsList/blogsList";
function Blogs(props) {
  const { blogs } = props;
  return (
    <Layout bgColor="#eff1f5">
      <div className={styled["blogs-page-container"]}>
        <BlogsList blogs={blogs} />
      </div>
    </Layout>
  );
}

export function getServerSideProps() {
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
    },
  };
}

export default Blogs;
