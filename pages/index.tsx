import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { LogoIcon } from "../components/Icons";

function Main() {
  const router = useRouter();

  return (
    <Grid placeItems="center" height="100vh">
      <Box>
        <Stack align="center">
          <LogoIcon boxSize={8} />
          <Heading as="h1" size="lg">
            treble.coffee
          </Heading>
          <Text>A collection of media lists completed</Text>
          <Text>by Jhonatan Salazar</Text>
        </Stack>
        <Box mt="8">
          <Heading size="md" fontWeight="normal" mb="3">
            NeedleDrop
          </Heading>
          <HStack>
            <Button variant="outline" onClick={() => router.push("/pf/2015")}>
              2022
            </Button>
            <Button variant="outline">2022</Button>
            <Button variant="outline">2022</Button>
            <Button variant="outline">2022</Button>
            <Button variant="outline">2022</Button>
          </HStack>
        </Box>
        <Box mt="8">
          <Heading size="md" fontWeight="normal">
            Pitchfork
          </Heading>
          <HStack>
            <Button variant="outline">2022</Button>
          </HStack>
        </Box>
      </Box>
    </Grid>
  );
}

export default Main;
