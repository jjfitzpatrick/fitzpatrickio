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
      <Divider />
      <Box
        align="center"
        as="footer"
        direction="row"
        flex="false"
        gap="medium"
        justify="center"
        pad="small"
      >
        <Button
          href="https://github.com/jjfitzpatrick"
          label="GitHub"
          target="_blank"
          icon={<Github />}
          gap="medium">
        </Button>
        <Button
          href="https://www.linkedin.com/in/mr-john-fitzpatrick"
          label="LinkedIn"
          target="_blank"
          icon={<LinkedinOption color="plain" />}
          gap="medium">
        </Button>
        <Button
          href="https://fitzpatrick.io"
          label="fitzpatrick.io"
          target="_self"
          icon={<Home />}
          gap="medium">
        </Button>
      </Box>
      <Divider />
    </>
  )
}

export default Footer