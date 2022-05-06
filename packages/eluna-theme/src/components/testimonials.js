import React, { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Text,
  Stack,
  Box, 
  Avatar,
  Icon,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  useColorModeValue,
  useFocusEffect
} from '@chakra-ui/react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [testimonialsTouched, setTestimonialsTouched] = useState(false);
    const testimonials = [
        { 
          index: 0,
          name: 'Stephanie T.',
          role: 'Chief Marketing Officer',
          content:
            'I have loved working with Eluña. She has a natural ability to create a caring, nurturing, and safe environment for exploration and healing to take place. Eluña has a generous and insightful nature and coached me during a very challenging time in my life. The clarity I received while working with Eluña provided me with a deeper understanding of life. Thank you, Eluña, the breakthroughs I experienced during our sessions have been life changing.',
          avatar:
            'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          index: 1,
          name: 'Karthika B.',
          role: 'Entrepreneur',
          content:
            "Eluña is an empathic coach with a gentle and compassionate style. You instantly feel her welcoming aura and safe presence in the session. Beyond that, my time has been so transformative in my growth because Eluña hones in on the root issue, allowing you to dig deeper and gain clarity. Through intuitive perception and insightful knowledge, she guides you along different processes to understand new perspectives. I look forward to more sessions with her to help me on my healing journey.",
          avatar:
            'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          index: 2,
          name: 'Jason W.',
          role: 'Movie star',
          content:
            "Working with Eluña is both a joy and a powerful experience! She will help you to dig deep and really find the root cause to help you better understand your issue so that you can move forward in a very positive way. I’m very thankful for our sessions together",
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        },
      ];

    function nextTestimonial() {
        if (testimonialsTouched === false) {
            setTestimonialsTouched(true);
        }
        if (testimonials[currentTestimonial].index !== 2) {
            setCurrentTestimonial(currentTestimonial + 1)
        }
        if (testimonials[currentTestimonial].index === 2) {
            setCurrentTestimonial(0)
        }
    }

    function prevTestimonial() {
        if (testimonialsTouched === false) {
            setTestimonialsTouched(true);
        }
        if (testimonials[currentTestimonial].index !== 0) {
            setCurrentTestimonial(currentTestimonial - 1)
        }
        if (testimonials[currentTestimonial].index === 0) {
            setCurrentTestimonial(2)
        }
    }

    function autoNextTestimonial() {
        if (testimonials[currentTestimonial].index !== 2) {
            setCurrentTestimonial(currentTestimonial + 1)
        }
        if (testimonials[currentTestimonial].index === 2) {
            setCurrentTestimonial(0)
        }
    }

    function rotateTestimonials() {
        if (testimonialsTouched === false) {
            setTimeout(autoNextTestimonial, 10000);
        }
    }

    rotateTestimonials();
  
    return (
    <Stack mt={20} mb={20}>
        <Stack
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={16}
            px={8}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            direction={'column'}
            mt={20}
            mb={10}
            minHeight="500px"
            >
                <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    textAlign={'center'}
                    maxW={'3xl'}>
                    {testimonials[currentTestimonial].content}
                </Text>
                <Box textAlign={'center'}>
                    <Avatar
                    src={
                        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                    }
                    alt={'Stefanie T'}
                    mb={2}
                    />

                    <Text fontWeight={600}>{testimonials[currentTestimonial].name}</Text>
                    {/* <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
                    Vice President
                    </Text> */}
                </Box>
            </Stack>
            <Flex direction="row" align="center" justify="center">
                <Button bg="brand.400" onClick={() => prevTestimonial()}><Icon as={MdOutlineArrowBackIos} color="brand.200" boxSize={10} /></Button>
                <Button bg="brand.400" onClick={() => nextTestimonial()}><Icon as={MdOutlineArrowForwardIos} color="brand.200" boxSize={10} /></Button>
            </Flex>
        </Stack>
    )
  }

  export default Testimonials;

