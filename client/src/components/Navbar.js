import React from "react";
import Link from 'next/link'
import { Anchor, Header, Heading, Nav, } from 'grommet';

const Navbar = () => {
  const LightDarkSwitch = () => {
    // return (
    //   <IconButton
    //     aria-label="Toggle dark mode"
    //     borderColor="none"
    //     icon={colorMode === 'light' ? <SunIcon/>: <MoonIcon/> }
    //     variant="unstyled"
    //     onClick={toggleColorMode}
    //   />
    // )
  }

  const NavAnchor = () => {
    return (
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
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
        background="dark-1"
        pad="medium"
        margin={{ "bottom": "medium" }}
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