import { Box, Image, Text, Button } from 'grommet';
import { Document} from 'grommet-icons'

const Resume = () => {
  return (
    <>
      <Box
        align="center"
      >
        <Button
          href="files/JohnFitzpatrickResume2020.pdf"
          label="Click to open PDF résumé"
          target="_blank"
          icon={<Document />}
        ></Button>
        <Image src="/static/favicons/android-chrome-192x192.png"
          fit="contain"
        />
        <Text alignSelf="center">
          Resume - under construction, HTML coming soon! 🤞
        </Text>
      </Box>
    </>
  )
}

export default Resume