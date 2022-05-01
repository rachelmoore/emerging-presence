import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  Box,
  Icon,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { BsTrophy } from "react-icons/bs"
import { RiScales3Fill } from "react-icons/ri"
import { FaYinYang } from "react-icons/fa"
import { WiStars } from "react-icons/wi";


function Packages() {
  
    return (
      <Flex direction="column" justify="center" ml="15%" mr="15%" mb={20}>
          <Heading size="xl" fontWeight="500" mt={20} mb={10} color="brand.200" textAlign="center">Packages</Heading>
        <Text color="brand.200" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3}>
        The depth of this work calls for gentle strength and patient perseverance. Consistency allows for trust to build between the coach and client, 
        and all the various selves that lie within. For this reason, work with Eluña begins in 3-month packages with the longest package length being 12 months. 
        The Discovery Call helps coach and client identify which package length is most fitting.
        </Text>
        <Text color="brand.200" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3}>
        A passion for being of service is what brought Eluña to this work, which is why she wants to make this accessible to as many as possible. For every two clients who pay in full, 
        she works with one client free of charge. If you are unable to pay in full, there are payment plans available. Please see the table below to find the right payment plan for you.
        </Text>

        <TableContainer>
        <Table size='sm'>
            <Thead>
            <Tr>
                <Th>Length</Th>
                <Th>Paid in Full</Th>
                <Th>Payment Plan</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td>3 month - 4x/month</Td>
                <Td>$1,667</Td>
                <Td>$657/month</Td>
            </Tr>
            <Tr>
                <Td>6 month - 4x/month</Td>
                <Td>$3,337</Td>
                <Td>$606/month</Td>
            </Tr>
            <Tr>
                <Td>6 month - 4x/month</Td>
                <Td>$5,667</Td>
                <Td>$497/month</Td>
            </Tr>
            </Tbody>
        </Table>
        </TableContainer>
      </Flex>
    )
  }

  export default Packages;