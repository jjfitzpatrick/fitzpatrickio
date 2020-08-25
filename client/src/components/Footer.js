import {
  Box,
  Divider,
  Link,
  SimpleGrid,
  Flex,
} from '@chakra-ui/core'
import { ExternalLinkIcon } from '@chakra-ui/icons'
  
const Footer = () => {
  return (
    <>
    <Flex justifyContent="center">
      <Divider
        width="97%"
        alignItems="center" />
    </Flex>
    
    <Flex
      justifyContent="center"
      m={4}
    >
      <SimpleGrid columns={3} spacing={10}>
        <Box>
          <Link 
            px={5}
            href="https://github.com/jjfitzpatrick"
            title="GitHub"
            isExternal>
            GitHub <ExternalLinkIcon />
          </Link>
        </Box>
        <Box>
          <Link
            px={5}
            href="https://www.linkedin.com/in/mr-john-fitzpatrick"
            title="LinkedIn"
            isExternal>
            LinkedIn <ExternalLinkIcon />
          </Link>
        </Box>
        <Box>
          <Link href="https://fitzpatrick.io"
            title="fitzpatrick.io">
            fitzpatrick.io
          </Link>
        </Box>
      </SimpleGrid>
    </Flex>
    
    <Flex justifyContent="center" paddingBottom={2}>
      <Divider
        width="97%"
        alignItems="center" />
    </Flex>
    </>
  )
}

export default Footer