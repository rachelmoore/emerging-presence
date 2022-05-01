import React, { useState, useEffect } from "react";
import { connect, Global, css, styled, Head } from "frontity";
import {
  extendTheme,
  useMediaQuery,
  Flex,
  Image,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react'
// import Link from "@frontity/components/link";
// import Switch from "@frontity/components/switch";
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from "./navigation";
import Introduction from "./introduction";
import About from "./about";
import Bio from "./bio";
import Testimonials from "./testimonials";
// import { FaInstagram } from 'react-icons/fa';
// import List from "./list";
// import Post from "./post";
// import Page from "./page";
// import Header from "./header";
import EPlogo from '../assets/EPlogo.jpg';

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  console.log('data', data);
  const [mobileOS, setMobileOS] = useState(false)
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)")
  const [isLargerThan1015] = useMediaQuery("(min-width: 1015px)")

const theme = extendTheme({
  colors: {
    brand: {
      100: "#701F32",
      200: "#43192B",
      300: "#62BF41",
      400: "#F4EFF1",
      500: "#B599A2",
      600: "#BE8494",
    },
  },
});

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="row" bg="brand.100" padding={5} justify="flex-end">
          <Navigation />
      </Flex>
      <Flex direction="column" align="center" pt={10} pb={20}>
          <Image src={EPlogo} height="400px"/>
      </Flex>
      <Flex direction="column" align="center" bg="brand.100">
          <Introduction/>
      </Flex>
      <Flex direction="column" align="center" bg="brand.400">
          <About />
      </Flex>
      <Flex direction="row" align="center" bg="brand.100">
          <Bio />
      </Flex>
      <Flex direction="column" align="center" bg="brand.400">
          <Testimonials />
      </Flex>
    </ChakraProvider>
  )
}

export default connect(Root)