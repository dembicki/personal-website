import React from 'react'
import { Heading, Text, Flex, ScaleFade, Image } from '@chakra-ui/react';
import avatar from '../assets/me.jpeg';


export default function Header(image) {
  return (
    <ScaleFade in>
      <Flex flexDir="column" paddinTop="36">
        <Image src={avatar} borderRadius="full" boxSize="200px" margin="10" />
        <Heading color="white" size="3xl" > Hello, I'm Damian</Heading>
        <Text lineHeight="1.8" marginTop="10" color="whiteAlpha.500">Web Developer currently working as Teach Lead of Doc Squad at Poland.
        I mostly do front-end, and i'm a React.js and CSS nerd. I can't shut up test-driven
        developement and utility first CSS. I also share what i learn on my blog at ...
        or at meetups and conferences.
      </Text>
      </Flex>
    </ScaleFade >
  )
}
