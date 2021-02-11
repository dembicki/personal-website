import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import { Flex, Center, Text, Heading, Box, SlideFade, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Socials from './components/Socials';
import Tile from './components/Tile';

function App() {

  const [renderStart, setRenderStart] = useState(false);

  useEffect(() => {
    setRenderStart(true);
  }, [])

  return (
    <div>
      <Flex>
        <Header />

        {/* main content */}
        <Box bg="gray.900" width="calc(100% - 450px)" marginLeft="550px" padding="10" justifyContent="flex-end">
          <section>

          </section>

        </Box>


      </Flex>
    </div >
  );
}

export default App;
