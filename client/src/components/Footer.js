import { Box, Button, Anchor } from 'grommet'
import { Share, Home, Github, LinkedinOption, Linkedin } from 'grommet-icons';

const Divider = () => {
  return (
    <Box width="95%" margin="auto">
      <hr></hr>
    </Box>
  )
}

const Footer = () => {
  return (
    <>
      <Box
        align="center"
        as="footer"
        direction="row"
        gap="medium"
        justify="center"
        pad="medium"
        background="light-4"
      >
      <Divider />
        <Button
          href="https://github.com/jjfitzpatrick"
          label="GitHub"
          target="_blank"
          icon={<Github color="white" />}
          gap="medium"
          primary="true"
        >
        </Button>
        <Button
          href="https://www.linkedin.com/in/mr-john-fitzpatrick"
          label="LinkedIn"
          target="_blank"
          icon={<LinkedinOption color="white" />}
          gap="medium"
          primary="true"
        >
        </Button>
      <Divider />
      </Box>
    </>
  )
}

export default Footer