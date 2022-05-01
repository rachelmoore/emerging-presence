import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex,
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


function About() {
  
    return (
      <Flex direction="column" justify="center" ml="15%" mr="15%" mb={5}>
          <Heading size="lg" fontWeight="500" mt={20} mb={10} color="brand.200">What is Psychospiritual Coaching and Transpersonal Guiding?</Heading>
        <Text color="brand.200" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3}>
            Psychosynthesis is a transdisciplinary practice that allows you to identify disparate aspects of self and, through various methods, 
            to heal and integrate those aspects. This healing and integration provides greater depth, clarity, and love for yourself and for your life. 
            Some of the methods include: 
        </Text>

        <SimpleGrid columns={2} spacing={10} mt={10} mb={10}>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={BsTrophy} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Activation of the Will</Heading>
                    <Text fontSize="xl" color="brand.400" textAlign="center">Learn how to activate, strengthen, and refine your will; learn how to prioritize in order to manifest your goals</Text>
                </Flex>
            </Box>

            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={FaYinYang} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Balance and Integrate your Shadow</Heading>
                    <Text fontSize="xl" color="brand.400" textAlign="center">Establish a relationship with the shadow self/ves within; learn what their gifts and needs are; how to healthily relate to and communicate with them</Text>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
                <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={RiScales3Fill} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Psychological Functions</Heading>
                    <Text fontSize="xl" color="brand.400" textAlign="center">Learn what functions (sensation, emotion/feeling, impulse/desire, imagination, thought, intuition) you are dominant in and less dominant in; learn how to balance and strengthen each function</Text>
                </Flex>
            </Box>
            <Box bg='brand.200' borderRadius={40}>
            <Flex direction="column" justify="center" align="center" padding={10}>
                    <Icon as={WiStars} color="brand.400" boxSize={10} />
                    <Heading mt={3} mb={5} size="lg" color="brand.400" textAlign="center" style={{display: "flex", alignItems: "center"}}>Identifying your Ideal Model</Heading>
                    <Text fontSize="xl" color="brand.400" textAlign="center">Learn what limiting and distorted models (ways of relating, thinking, behaving) are at work in your life; identify your Soul’s ideal model and purpose</Text>
                </Flex>
            </Box>
        </SimpleGrid>

        <Text color="brand.200" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3}>
        Transpersonal guiding is one of the many methods we will explore in our work together. Transpersonal refers to anything related to states of consciousness beyond personal identity. 
        You will learn how your Soul speaks to you while deepening and refining your relationship to your Soul and intuition. Transpersonal guiding allows you to move toward greater spiritual maturity, 
        personal evolution, and conscious action in support of your passion, your calling, and the gifts you are here to share.
        </Text>
        <Text color="brand.200" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3}>
        Uniting the evolution of spirit with the healing of both the mental and emotional selves is how Eluña defines true holistic healing - body, mind and spirit. In her own life, Eluña has experienced that 
        releasing the invisible shackles of the past has enabled her to be in a state of equanimity which has allowed her to approach life with an open heart, curiosity, and excitement, even in the face of adversity. 
        Being educated in both psychology and trauma supports her in the work she does with clients and how she holds space. 
        </Text>
      </Flex>
    )
  }

  export default About;