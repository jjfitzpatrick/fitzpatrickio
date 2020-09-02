import { Box, Anchor } from 'grommet'
import { Share, Home } from 'grommet-icons';
  
const Footer = () => {
  return (
    <>
      {/* Horizontal divider, width 97% */}
      <Box
        align="center"
        as="footer"
        direction="row"
        flex="false"
        gap="medium"
        justify="center"
        pad="medium"
      >
        <Anchor
          href="https://github.com/jjfitzpatrick"
          label="GitHub"
          target="_blank"
          icon={<Share />}>
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/in/mr-john-fitzpatrick"
          label="LinkedIn"
          target="_blank"
          icon={<Share />}>
        </Anchor>
        <Anchor
          href="https://fitzpatrick.io"
          label="fitzpatrick.io"
          target="_self"
          icon={<Home />}>
        </Anchor>
      </Box>
      {/* Horizontal divider, width 97% */}
    </>
  )
}

export default Footer