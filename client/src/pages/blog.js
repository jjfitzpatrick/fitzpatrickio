import fs from "fs";
import matter from "gray-matter";
import { Anchor, Box, Header, Heading, Text, } from 'grommet';
import Link from 'next/link'

const BlogPost = (props) => {
  return (
    <>
      <Box
        margin={{
          bottom: "medium"
        }}
        pad={{
          "bottom":"15px"
        }}
        border={{
          "side":"bottom"
        }}
      >
        <Header>
          <Link href={`/blog/[slug]`} as={`/blog/${props.slug}`} passHref>
            <Anchor color="text" _hover={{ textDecoration: "none" }}>
              <Heading size="xsmall">{props.frontmatter.title}</Heading>
            </Anchor>
          </Link>
          <Text>{props.frontmatter.date}</Text>
        </Header>
          <Text>{props.frontmatter.summary}</Text>
      </Box>
      
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
