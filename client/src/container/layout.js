import { Box,
  Container,
  Flex,
  useColorMode
} from '@chakra-ui/core'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: '#FFF3B0',
    dark: 'gray.800'
  };

  const primarytextColor = {
    light: 'black',
    dark: 'gray.50'
  };
  
  return (
    <>
      <Box minHeight="100vh"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
      >
        <Navbar />
        <Flex
          as="main"
          flexDirection="column"
          px={6}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          pb="1rem"
        >        
          <Container>
            {children}
          </Container>
        </Flex>
        <Footer />
      </Box>
    </>
  )
}

export default Layout