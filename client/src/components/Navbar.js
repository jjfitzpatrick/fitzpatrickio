import React from "react";
import Link from 'next/link'
import { Anchor, Header, Heading, Nav, } from 'grommet';

const Navbar = () => {

  const NavAnchor = () => {
    return (
      <Heading size="lg">
        <Link href="/">
          <Anchor href="/" label="fitzpatrick.io" />
        </Link>
      </Heading>
    )
  }

  const Navlink = ({ children, ...props }) => {
    return (
      <Link href={"/" + props.path} passHref>
        <Anchor href={props.path} label={props.text} />
      </Link>
    )
  }

  return (
    <>
      <Header
        background="light-4"
        pad={{"left": "xlarge", "right": "xlarge"}}
      >
        <NavAnchor/>
        {/* TODO: Add side responsive sidemenu: 
        https://github.com/grommet/grommet-starter-new-app */}
        <Nav direction="row">
          <Navlink text="About" path="about" />
          <Navlink text="Blog" path="blog" />
          <Navlink text="Résumé" path="resume" />
        </Nav>
      </Header>
    </>
  );
};

export default Navbar