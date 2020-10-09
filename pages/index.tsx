import { Box, Container, Heading } from "@chakra-ui/core";
import React from "react";

function Main() {
  return (
    <>
      <Box bgColor="#d32531" pt={8} pb={2} mb={8}>
        <Container maxW="lg" color="white">
          <Heading size="2xl" mb={2}>
            Treble.Coffee
          </Heading>
        </Container>
      </Box>
    </>
  );
}

export default Main;
