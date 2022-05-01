import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Box,
  Icon
} from '@chakra-ui/react';
import { GiCrystalBall, GiCrystalGrowth, GiPsychicWaves, GiShinyApple, GiMeditation } from "react-icons/gi"
import { SiCrystal } from "react-icons/si"
import { GrAttraction, GrBeacon } from "react-icons/gr"
import { IoPlanetOutline } from "react-icons/io"
import { FaHatWizard } from "react-icons/fa"
import { BsTrophy } from "react-icons/bs"
import { MdOutlineWaves } from "react-icons/md"
import { RiMedicineBottleLine } from "react-icons/ri"



function Services() {
  
    return (
      <Flex id="introduction" direction="column" justify="center" ml="15%" mr="15%">
          <Heading size="2xl" mt={10} mb={10} color="#F4EFF1" textAlign="center">Services</Heading>
        <Text color="brand.400" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3} textAlign="cemter">
        Below you will find a list of services that can be included in your time with Eluña. 
        Some services are standard for each client, while others may be added or removed per your preference.
        </Text>

        <SimpleGrid columns={3} spacing={10} mt={10} mb={10}>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={GiPsychicWaves} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Psychospiritual coaching</Heading>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={GiMeditation} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Transpersonal guiding</Heading>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={BsTrophy} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Goal setting and prioritizing</Heading>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={MdOutlineWaves} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Releasing the past</Heading>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={RiMedicineBottleLine} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Ayurvedic advising</Heading>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={GiShinyApple} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Herb and nutrition advising</Heading>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={FaHatWizard} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Entheogenic medicine integration</Heading>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={GiCrystalBall} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Oracle and tarot card consultation and interpretation</Heading>
                </Flex>
            </Box>
        </SimpleGrid>

      </Flex>
    )
  }

  export default Services;