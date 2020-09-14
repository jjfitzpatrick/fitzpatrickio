import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Heading, Markdown } from "grommet"


export const Post = ({ title, content, frontmatter }) => {
  return (
    <>
    <Heading>{title}</Heading>
      <Markdown
        components={{
          "p": {
            "component": "Paragraph",
            "props": {"maxWidth": "inherit"}
          }
        }}
      >
        {content}
      </Markdown>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("src/data/posts")

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
   const markdownWithMetadata = fs
    .readFileSync(path.join("src/data/posts", slug + ".md"))
    .toString()

  const { data, content } = matter(markdownWithMetadata)

  const frontmatter = {
    ...data,
  }

  return {
    props: {
      title: data.title,
      content: `\n${content}`,
      frontmatter,
    },
  }
}

export default Post