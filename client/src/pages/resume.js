import React from 'react';
import { Box, Image, Text, Button } from 'grommet';
import { Document } from 'grommet-icons';

const Resume = () => {
  return (
    <>
      <Box
        align="center"
      >
        <Text alignSelf="center">
          Resume - under construction, HTML coming soon! 🤞
        </Text>
        <Button
          href="files/JohnFitzpatrickResume2023.pdf"
          label="Click to open PDF résumé"
          target="_blank"
          icon={<Document />}
        ></Button>
        <Image src="/static/favicons/android-chrome-192x192.png"
          fit="contain"
        />
      </Box>
    </>
  );
};

export default Resume;
