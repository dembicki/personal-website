import React from 'react'
import { Flex, Link, Box, ScaleFade } from "@chakra-ui/react";

export default function Socials() {
  const socials = [{
    name: 'github',
    link: '',
  },
  {
    name: 'linkedin',
    link: '',
  },
  ]

  return (
    <Box position="absolute" bottom="10">
      <ScaleFade in>

        <Flex width="400px" justify="space-around">
          {/* TODO: Map on lnks */}
          {socials.forEach(e => {
            return (<Link color="white">{e.name}</Link>)
          })}
        </Flex>

      </ScaleFade>
    </Box >
  )
}
