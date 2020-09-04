import { Box, Heading, Image, Text, } from 'grommet';

const About = () => {
  function Blurb({ title, paragraphs, ...rest }) {
    return (
      <>
        <Box
          pad="small"
          border={{
            "size": "small"
          }}
          borderRadius="5px"
        >
          <Heading size="small">{title}</Heading>
          {paragraphs.map(para => (
            <Text key={para}>{para}</Text>
          ))}
        </Box>
      </>
    )
  }

  return (
    <>
      <Blurb
        title="About me"
        paragraphs={['Hello! I\'m John Fitzpatrick, a Software Engineer located in Columbus, Ohio. I created this site to share what I have learned from prior projects, share what I am learning now and refine my writing and writing skills. I have learned a lot on this journey and hope you can find a little nugget of knowledge too.']}
      />
      <Blurb
        title='My work'
        paragraphs={['Professionally I have spent most of my career in the Microsoft world - Azure, C#, ASP.NET, .NET Core and basic JS/HTML/CSS - working with large enterprise clients. Most this work falls in the backend and dev ops worlds.',
        
        'In my free time I have taken up the task of mastering the frontend works by studying JavaScript via React. I\'ve tossed in Next.js and Node.js to keep things spicy - life is boring without data.']}
      />
      <Blurb
        title='This site'
        paragraphs={['I created this site to keep my full stack developer skills sharp. The site is hosted on DigitalOcean and runs on React, Next.js and Node.js.',
        
        'The site and server has been built from the group up without any starter kits or templates. The server started as a blank Ubuntu server and the codebase was born from a the simple npx create-next-app - all styles, content, tooling, etc was implemented by hand.',
        
        'My goal with this site is to showcase my projects and accomplishments and to serve as a learning tool for others.']}
      />
      <Blurb
        title="Say hi!"
        paragraphs={['If you\'d like to chat or share any comments please reach out to me on social media (links in the footer). Personal todo: add contact form.']}
      />

    </>
  )
}

export default About