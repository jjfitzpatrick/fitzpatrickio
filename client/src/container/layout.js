import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Navbar />
        <Box
          as="main"
          fill="vertical"
          overflow="auto"
          pad="small"
          width="50em"
          alignSelf="center"
        >
          { children }
        </Box>
        <Footer />

      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
