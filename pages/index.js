import Head from "next/head";
import styled from "@/styles/Home.module.css";
import Hero from "@/components/home/hero/hero";
import HomeContent from "@/components/home/homeContent/homeContent";
import Footer from "@/components/home/footer/footer";
import Contact from "@/components/home/contact/contact";
import Error from "@/components/error/error";

export default function Home(props) {
  const { blogs, populars, categories, error } = props;

  if (error) {
    console.log(error);
    return <Error />;
  }

  return (
    <div className={styled["home-container"]}>
      <Head>
        <title>so_hell</title>
      </Head>
      <Hero />
      <HomeContent categories={categories} blogs={blogs} populars={populars} />
      <Contact />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    let populars = await fetch(
      "https://perfect-fox-boot.cyclic.app/api/blogs/getFeaturedBlogs"
    );

    let categories = await fetch(
      "https://perfect-fox-boot.cyclic.app/api/category/getAllCategory"
    );
    populars = await populars.json();
    categories = await categories.json();
    return {
      props: {
        blogs: populars,
        populars: populars,
        categories: categories,
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
