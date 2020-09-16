import React from 'react';
import { Box, Button } from 'grommet';
import { Github, LinkedinOption } from 'grommet-icons';

const Divider = () => {
  return (
    <Box width="95%" margin="auto">
      <hr></hr>
    </Box>
  );
};

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
      >
        <Divider />
        <Button
          href="https://github.com/jjfitzpatrick"
          label="GitHub"
          target="_blank"
          icon={<Github color="white" />}
          gap="medium"
          primary
        >
        </Button>
        <Button
          href="https://www.linkedin.com/in/mr-john-fitzpatrick"
          label="LinkedIn"
          target="_blank"
          icon={<LinkedinOption color="white" />}
          gap="medium"
          primary
        >
        </Button>
        <Divider />
      </Box>
    </>
  );
};

export default Footer;
