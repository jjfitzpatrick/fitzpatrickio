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
        overflow="auto"
        pad={{"top": "small"}}
      >
        { children }
      </Box>
      <Footer />
    </>
  )
}

export default Layout