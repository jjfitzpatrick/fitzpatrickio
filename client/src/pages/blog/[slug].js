import React from 'react';
import PropTypes from 'prop-types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Heading } from 'grommet';
import Markdown from 'markdown-to-jsx';
export const Post = ({ title, content, frontmatter }) => {
  return (
    <>
      <Heading level="2">{title}</Heading>
      <Markdown
        options={{
          overrides: {
            img: {
              props: {
                width: '100%',
                style: {
                  border: '4px solid #E7E7E7',
                  margin: '0 auto',
                  display: 'block'
                }
              }
            }
          }
        }}
      >
        {content}
      </Markdown>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  frontmatter: PropTypes.object.isRequired
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('src/data/posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('src/data/posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const frontmatter = {
    ...data
  };

  return {
    props: {
      title: data.title,
      content: `\n${content}`,
      frontmatter
    }
  };
};

export default Post;
