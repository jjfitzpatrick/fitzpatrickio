import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'grommet';

const About = () => {
  const Blurb = ({ title, paragraphs }) => {
    return (
      <>
        <Heading size="small">{title}</Heading>
        {paragraphs.map(para => (
          <Text
            key={para}
            margin={{ bottom: '15px' }}
          >
            {para}
          </Text>
        ))}
      </>
    );
  };

  Blurb.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.string.isRequired
  };

  return (
    <>
      <Blurb
        title="About me"
        paragraphs={['Hello! I\'m John Fitzpatrick, a Software Engineer located in Columbus, Ohio. I created this site to share what I have learned from prior projects and what I am learning now. This will also help refine my technical writing skills and serve as a portfolio. I have learned a lot on this journey and hope you can find a little nugget of knowledge too.']}
      />
      <Blurb
        title='My work'
        paragraphs={['Professionally I have spent most of my career in the Microsoft world - Azure, C#, ASP.NET, .NET Core and JS/HTML/CSS - working with small and medium sized businesses as a software engineer and consultant.',

          'In my free time I have taken up the task of mastering the frontend works by studying JavaScript via React. I\'ve tossed in Next.js and Node.js to keep things spicy - life is boring without data.']}
      />
      <Blurb
        title='This site'
        paragraphs={['I created this site to keep my full stack developer skills sharp. The site is hosted on DigitalOcean and runs on React, Next.js and Node.js.',

          'The site and server has been built from the group up without any starter kits or templates. The server started as a blank Ubuntu server and the codebase was born from a the simple npx create-next-app - all styles, content, tooling, etc was implemented by hand.',

          'My goal with this site is to showcase my projects and accomplishments and to serve as a learning tool for others.']}
      />
      {/* Add contact form */}
      <Blurb
        title="Say hi!"
        paragraphs={['If you\'d like to chat or share any comments please reach out to me on social media (links in the footer). Personal todo: add contact form.']}
      />

    </>
  );
};

export default About;
