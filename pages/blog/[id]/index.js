import React from "react";
import styled from "../../../styles/Blog.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

function Blog({ blogContent }) {
  const markdown = blogContent.content;
  return (
    <div className={styled["blog-container"]}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={nightOwl}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  let blogContent = await fetch(
    `http://localhost:4000/api/blogs/getBlog/${id}`
  );
  blogContent = await blogContent.json();
  blogContent = blogContent.blog;
  return {
    props: {
      blogContent: blogContent,
    },
  };
}

export default Blog;
