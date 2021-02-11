import React from 'react'
import { Box, Text, Image, SlideFade } from '@chakra-ui/react'

export default function Tile(name, logo) {
  return (
    <SlideFade in>
      <Box w="100%" padding="32" bg="gray.800" h="5">
        {logo ? <Image src={logo} /> : null}
        <Text color="white">name</Text>
      </Box >
    </SlideFade>
  )
}
