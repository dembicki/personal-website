import React from 'react'
import { Heading, Text, Flex, Slide, Image, Link, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons'
import avatar from '../assets/me.jpeg';
import Socials from './Socials';


export default function Header(image) {
  return (
    <Slide in direction="left">
      <Flex padding="10" bg="gray.800" width="550px" position="fixed" minH="100vh" paddinTop="36" flexDirection="column">
        <Image src={avatar} borderRadius="full" boxSize="250px" margin="12" />
        <Heading color="white" size="4xl" > Hello, I'm Damian</Heading>
        <Text lineHeight="1.8" marginTop="10" color="whiteAlpha.600">
          Web Developer currently working as Teach Lead of Doc Squad at Poland.
          I mostly do front-end, and i'm a React.js and CSS nerd. I can't shut up test-driven
          developement and utility first CSS. I also share what i learn on my blog at ...
          or at meetups and conferences.
          </Text>
        <Button marginTop="10" colorScheme="telegram" width="200px" leftIcon={<DownloadIcon />} size="sm">Download CV</Button>
        <Socials />
      </Flex>
    </Slide>
  )
}



