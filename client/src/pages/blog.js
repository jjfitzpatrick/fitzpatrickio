import fs from "fs";
import matter from "gray-matter";
import { Box, Heading, Text, } from 'grommet';
import Link from 'next/link'

const BlogPost = (props) => {
  return (
    <>
      <Link href={`/blog/[slug]`} as={`/blog/${props.slug}`}>
        <Box>
          <Heading size="xsmall">
            {props.frontmatter.title}
          </Heading>
          <Text>
            {props.frontmatter.description}
          </Text>
        </Box>
      </Link>
    </>
  )
}

export const Blog = ({ posts }) => {
  return (
    <>
    {posts.map(({ frontmatter, slug }) => (
      <BlogPost key={slug} slug={slug} frontmatter={frontmatter}  />
      ))}
    </>
  )
}
export const getStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/src/data/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/data/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = { ...data };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog
