import React from 'react'
import { Flex, Link, Box, ScaleFade } from "@chakra-ui/react";
import { AnimatedSocialIcon } from 'react-animated-social-icons';

export default function Socials() {
  const socials = [{
    name: 'github',
    link: 'https://www.github.com/dembicki',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/dembicki-damian/',
  },
  ]

  return (
    <Box position="absolute" bottom="10">
      <ScaleFade in>
        <Flex width="400px" justify="space-around">
          {socials.map(e => {
            return (

              <Link href={e.link} isExternal color="white" fontSize="lg">
                <Flex alignItems="center">
                  <AnimatedSocialIcon
                    brandName={e.name}
                    width="1.1rem"
                    animationDuration={0.8}
                    style={{ marginRight: '15px' }}
                  />
                  {e.name}
                </Flex>
              </Link>
            )
          })}
        </Flex>
      </ScaleFade>
    </Box >
  )
}
