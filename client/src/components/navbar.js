import React from "react";
import NextLink from 'next/link'
import { Box, Heading, Flex, Text, Stack,
  Switch, IconButton, Button,
  useColorMode,
 } from "@chakra-ui/core";
 import {SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const LightDarkSwitch = () => {
    return (
      <IconButton
        aria-label="Toggle dark mode"
        borderColor="none"
        icon={colorMode === 'light' ? <SunIcon/>: <MoonIcon/> }
        variant="unstyled"
        onClick={toggleColorMode}
      />
    )
  }

  const NavAnchor = () => {
    return (
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        {/* TODO: revert  */}
        <NextLink href="/about">
          <a>fitzpatrick.io</a>
        </NextLink>
      </Heading>
    )
  }

  const Navlink = ({ children, ...props }) => {
    return (
      <Text mr={6}>
        <NextLink href={"/" + props.path}>
          <a>{props.text}</a>
        </NextLink>
      </Text>
    )
  }

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding=".5rem"
        marginBottom="1rem"
        bg="#E09F3E" // TODO: Move to theme.js
      >
        <Flex align="center" mr={5}>
          <LightDarkSwitch />
          <NavAnchor />
        </Flex>
        <Flex>
          <Box
              // TODO: Collapse into menu icon for mobile
              display={{ sm: "block", md: "flex" }}
              width={{ sm: "full", md: "auto" }}
              alignItems="center"
              flexGrow={1}
              >
            <Navlink text="About" path="about" />
            <Navlink text="Blog" path="blog" />
            <Navlink text="Resumé" path="resume" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar