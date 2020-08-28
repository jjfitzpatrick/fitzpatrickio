import {
  Text,Stack, Image,
} from '@chakra-ui/core'

const Blog = () => {
  return (
    <>
      <Stack spacing={3} minHeight="80%">
        <Text fontSize="xl"
          align="center">
          <Image src="/static/favicons/android-chrome-192x192.png" 
            alt="Under construction"
            justifyContent="center"
          />
          Blog - under construction, content being written 🖋
        </Text>
      </Stack>
    </>
  )
}

export default Blog
