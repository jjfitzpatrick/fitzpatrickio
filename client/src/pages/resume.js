import {
  Text,
  Stack,
  Image,
  Link,
} from '@chakra-ui/core'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const Resume = () => {
  return (
    <>
      <Stack spacing={3} minHeight="80%">
        <Link href="/files/JohnFitzpatrickResume2020.pdf" isExternal>
          <Text fontSize="4xl" align="center">
            <ExternalLinkIcon/> Click to open PDF resumé
          </Text>
        </Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Text fontSize="xl"
          align="center">
          <Image src="/static/favicons/android-chrome-192x192.png" 
            alt="Under construction"
            justifyContent="center"
          />
          Resume - under construction, HTML coming soon! 🤞
        </Text>
      </Stack>
    </>
  )
}

export default Resume