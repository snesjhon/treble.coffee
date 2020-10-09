import { Box, Text, Flex, Heading } from "@chakra-ui/core";
import React from "react";
import { RSData } from "../interfaces";

function ListYear({ data }: { data: RSData[] }) {
  console.log(data);
  return (
    <Box>
      <Text fontStyle="italic" fontWeight="500">
        2003 vs 2012 vs 2020
      </Text>
      <Flex pb={2}>
        <Heading size="lg" borderBottom="4px solid #d32531" pb={2}>
          Years over Years
        </Heading>
      </Flex>
      <Text>
        The top 50 mostly stayed the same for 2003 vs 2012. But had a dramatic
        shift in 2020
      </Text>
      <br />
    </Box>
  );
}

export default ListYear;
