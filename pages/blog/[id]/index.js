import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism";

function Blog(props) {
  const { blogContent } = props;

  return (
    <div>
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
              >{String(children).replace(/\n$/, "")}</SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {blogContent}
      </ReactMarkdown>
    </div>
  );
}

export function getServerSideProps(context) {
  const { id } = context.params;

  const blogContent = `# The End of Front-End Development

  Over the past few months, I've spoken with lots of early-career devs who are getting more and more anxious about AI. They've seen the increasingly-impressive demos from tools like GPT-4, and they worry that by the time they're fluent in HTML/CSS/JS, there won't be any jobs left for them.

  This sentiment is all over Twitter right now:
  
  ![image-alt-text](https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fthe-end-of-frontend-development%2Fno-more-frontend-devs.png&w=640&q=75)
  
  \`I couldn't disagree more\`. I don't think web developer jobs are going anywhere. And I'm getting pretty sick of the FUD? being spread online.
  
  <blockquote>
  Full disclosure
  I should note that I have a vested interest in this topic: I teach software development online. It would be bad for my business if developer jobs start disappearing.
  
  That said, everything in this blog post is based on my true beliefs. You can decide for yourself if those beliefs are biased or not.
  </blockquote>
  
  ## Here we go again
  
  The CSS language was first released in 1996, in Internet Explorer 3. Within 2 years, the first "no code" website builder, Homestead, had launched.
  
  Homestead allowed people to build custom web pages without writing a single line of code:
  
  
  
  ![image-alt-text](https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fthe-end-of-frontend-development%2Fhomestead.jpg&w=640&q=75)
  
  Pretty much since the beginning, there's been a concern that web developers would be made redundant by some new technology. In the 2000s, it was WordPress. In the 2010s, it was Webflow. In the early 2020s, it was "no code" tools.
  
  And, in a way, web developers have been made obsolete! These days, if a local bakery or a dentist or an artist needs a website, they're probably not hiring a developer and paying them tens of thousands of dollars to build something from scratch. They'll hop onto SquareSpace, find a template they like, and spend $20/month.
  
  And yet, web developers continue to exist.
  
  Last week, OpenAI did a showcase of GPT-4. This featured a pretty impressive demo: GPT-4 can take a hand-drawn sketch of a website, and turn it into fully-functional website, including a bit of JS to wire up the “Reveal Punchline” button.
  
  ![image-alt-text](https://www.joshwcomeau.com/images/the-end-of-frontend-development/gpt-4-result.png)
  
  This is remarkable, and I think it has a lot of potential when it comes to prototyping… But let's be clear: we haven't needed web developers to build these sorts of pages in decades. There is an enormous difference between this HTML document and the sorts of code front-end developers write today.
  
  
  ## In build code preview
  
  \`\`\`js
  import React from 'react';
  import ShoppingList from './ShoppingList';
  
  function App() {
    const [items, setItems] = React.useState([]);
    
    return (
      <div>
        {items.length && <ShoppingList items={items} />}
      </div>
    );
  }
  
  export default App;
  \`\`\`
  
  
  ## Looking into the future
  
  Most of the demos I've seen so far are pretty limited in scope: a simple HTML page, or a single JavaScript function. The sorts of things a single developer could do in an afternoon.
  
  But these are the early days! If things continue to accelerate at the same rate, it'll be able to build entire applications in a couple years, right?
  
  I'm far from an expert when it comes to LLMs? like GPT-4, but I do understand how they work at a high level.
  
  Fundamentally, LLMs are super-powerful text predictors. Given a prompt, they use machine learning to try and come up with the most likely set of characters that follow the prompt.
  
  Companies like OpenAI spend a ton of time and energy tweaking the models to improve the output. An army of human labelers “grade” the model's output, and the model learns and evolves.
  
  If you've experimented with tools like Chat GPT or Bing's AI-powered search, you've probably noticed that the responses are maybe 80% correct, but they're said with absolute and unshakeable confidence.
  
  LLMs aren't able to validate their assumptions, or test their hypotheses. They can't confirm whether what they're saying is true or not. They're playing a probability game, and estimating that this string of characters seems to be compatible with the string of characters from the prompt.
  
  Sometimes, parts of that response are nonsensical. The OpenAI team refers to these as “hallucinations”.
  
  As the technology improves, we can expect some of the rough edges to be sanded down, but fundamentally, there will always be some level of inaccuracy. These tools just don't have any mechanism to objectively validate their responses.
  
  And so, the accuracy will improve, but it'll never be perfect. And that's a problem, if we're talking about making web developers obsolete. If you're not a programmer, you won't be able to tell which parts are accurate or not. You won't be able to spot the hallucinations.
  
  But wait, in the GPT-4 demo, we saw how the AI can fix itself! Copy/paste the error message, and it'll find and fix the problem.
  
  But hm, not all hallucinations will lead to exceptions. For example, I recently used GPT-4 to generate a <Modal> component using React, and while the output was surprisingly good, it still made a few accessibility mistakes. The person creating the app might not notice these problems, but the end users sure will!
  
  What about security vulnerabilities in the code? Who is liable when things go horribly wrong?
  
  <blockquote>
  Why is your blog so big??
  Earlier, I mentioned that my blog has ~65k lines of code. If you're not familiar with my work, you might be very confused about how a simple blog can be so large! How over-engineered must it be??
  
  The reason there's so much code is that most of my blog posts feature lots of custom interactive elements, like my Interactive Guide to Flexbox:
  </blockquote> `;

  return {
    props: {
      blogContent: blogContent,
    },
  };
}

export default Blog;
