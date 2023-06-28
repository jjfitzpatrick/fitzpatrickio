import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Anchor, Header, Heading, Nav } from 'grommet';

const Navbar = () => {
  const NavAnchor = () => {
    return (
      <Heading size="lg">
        <Link href="/">
          <Anchor href="/" label="fitzpatrick.io" />
        </Link>
      </Heading>
    );
  };

  const Navlink = ({ ...props }) => {
    return (
      <Link href={'/' + props.path} passHref>
        <Anchor href={props.path} label={props.text} target={props.target} />
      </Link>
    );
  };

  Navlink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    target: PropTypes.string
  };

  return (
    <>
      <Header
        background="light-4"
        pad={{ left: 'xlarge', right: 'xlarge' }}
      >
        <NavAnchor/>
        {/* TODO: Add side responsive sidemenu:
        https://github.com/grommet/grommet-starter-new-app */}
        <Nav direction="row">
          <Navlink text="About" path="about" />
          <Navlink text="Blog" path="blog" />
          {/* TODO: Remove direct PDF link once resume page complete */}
          <Navlink text="Résumé" path="files/JohnFitzpatrickResume2023.pdf" target="_blank"/>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
