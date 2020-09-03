import { Box, Image, Text, } from 'grommet';

const Blog = () => {
  return (
    <>
      <Box
        align="center"
      >
        <Text alignSelf="center">
          Blog - under construction, content being written 🖋
        </Text>
        <Image src="/static/favicons/android-chrome-192x192.png"
          fit="contain"
        />
      </Box>
    </>
  )
}

export default Blog
