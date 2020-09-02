import { Box, Heading, Paragraph, } from 'grommet';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Layout = ({ children }) => {  
  return (
    <>
      <Navbar />
      <Box
        as="main"
        fill="vertical"
        flex="grow"
        overflow="auto"
      >
        { children }
      </Box>
      <Footer />
    </>
  )
}

export default Layout