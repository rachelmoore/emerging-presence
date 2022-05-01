
import {
    Flex,
    Heading
  } from "@chakra-ui/react"
  import React from "react"
  import { connect, styled, Head } from "frontity"
  import Link from "@frontity/components/link"
  import Loading from "./loading"
  
  const Header = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component
  
    if (data.isFetching) {
      return <Loading />
    }
  
    if (!data.isFetching) {
      return (
        <Flex direction="column" align="center" mb={10} width="100%" height="700px">
            <h1>Emerging Presence</h1>
        </Flex>
      )
    }
  }
  
  export default connect(Header)
  
  const HeaderContainer = styled.div`
    background-color: #FFFFFF;
    color: #000000;
  `