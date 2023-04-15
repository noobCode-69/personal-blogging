import Head from "next/head";
import styled from "@/styles/Home.module.css";
import Hero from "@/components/hero/hero";
import HomeContent from "@/components/homeContent/homeContent";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";
export default function Home(props) {
  const { blogs, populars, categories } = props;
  return (
    <div className={styled["home-container"]}>
      <Head>
        <title>so_hell</title>
        <meta
          name="description"
          content="Sharing my knowledgeon frontend developement"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <HomeContent categories={categories} blogs={blogs} populars={populars} />
      <Contact/>
      <Footer />
    </div>
  );
}

export function getServerSideProps() {
  const blogs = [
    {
      id: 1,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
    },
    {
      id: 2,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
    },
    {
      id: 3,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
    },
    {
      id: 4,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
    },
    {
      id: 5,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration",
    },
    {
      id: 5,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration!",
    },
    {
      id: 7,
      title: "The End of Front-End Development",
      content:
        "I used to teach React at a local coding bootcamp, and I noticed that students kept getting tripped up by the same handful of things. In this article, we're going to go through 9 of the most dastardly gotchas. I'll show you how to solve these common problems, so you can avoid a lot of potential frustration",
    },
  ];

  const populars = [
    {
      id: 1,
      title: "The End of Front-End Development",
    },
    {
      id: 2,
      title: "An Interactive Guide to Flexbox",
    },
    {
      id: 3,
      title: "An Interactive Guide to CSS Transitions",
    },
    {
      id: 4,
      title: "An Interactive Guide to Flexbox",
    },
    {
      id: 5,
      title: "An Interactive Guide to CSS Transitions",
    },
    {
      id: 6,
      title: "An Interactive Guide to Flexbox",
    },
    {
      id: 7,
      title: "An Interactive Guide to Flexbox",
    },
  ];

  const categories = [
    {
      id: 1,
      title: "React",
    },
    {
      id: 2,
      title: "Javascript",
    },
    {
      id: 3,
      title: "CSS",
    },
    {
      id: 4,
      title: "React Query",
    },
    {
      id: 5,
      title: "Next",
    },
  ];

  return {
    props: {
      blogs: blogs,
      populars: populars,
      categories: categories,
    },
  };
}
