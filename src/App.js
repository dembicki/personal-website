import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import { Flex, Center, Text, Heading, Box, Grid } from '@chakra-ui/react';
import Header from './components/Header';
import Socials from './components/Socials';
import Tile from './components/Tile';

function App() {

  const [renderStart, setRenderStart] = useState(false);

  useEffect(() => {
    setRenderStart(true);
  }, [])

  const skills = ['react', 'javascript', 'typescript', 'css', 'html', 'postgres', 'scss', 'sass', 'gatsby', 'aws', 'nodejs', 'php', 'bootstrap', 'git', 'sass']

  return (
    <div>
      <Flex>
        <Header />

        {/* main content */}
        <Box bg="gray.900" width="calc(100% - 450px)" marginLeft="550px" padding="10" justifyContent="flex-end">
          <section>
            <Box padding="10">
              <Heading color="whiteAlpha.400" size="3xl">Skillset</Heading>
              <Grid templateColumns="repeat(4, 1fr)" autoFlow gap={6}>
                {skills.map(e => {
                  return <Tile />
                })}
              </Grid>
            </Box>
          </section>

        </Box>


      </Flex>
    </div >
  );
}

export default App;
